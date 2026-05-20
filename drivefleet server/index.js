const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const { createRemoteJWKSet,jwtVerify } = require("jose-cjs");
dotenv.config();
const uri = process.env.MONGO_DB_URI;
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
);

const verifyToken = async (req, res, next) => {
  const authHeader = req?.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    console.log("Token payload:", payload);
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized" });
  }
};

async function run() {
  try {
    // await client.connect();

    const db = client.db("drivefleetDB");
    const carsCollection = db.collection("cars");
    const bookingsCollection = db.collection("bookings");

    app.get("/cars", async (req, res) => {
      try {
        const { search, type } = req.query;
        const query = {};

        if (search) {
          query.carName = { $regex: search, $options: "i" };
        }

        if (type) {
          query.category = type;
        }

        const cars = await carsCollection.find(query).toArray();
        res.json(cars);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
    });

    app.patch("/cars/:id",verifyToken, async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await carsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData },
      );
      res.send(result);
    });

    app.get('/health', (req, res) => res.send('OK'))

    app.post("/bookings", verifyToken,async (req, res) => {
      try {
        const bookingData = req.body;

        const result = await bookingsCollection.insertOne(bookingData);

        await carsCollection.updateOne(
          { _id: new ObjectId(bookingData.carId) },
          { $inc: { bookingCount: 1 } },
        );

        res.send(result);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

   

    app.get("/bookings/:email", verifyToken,async (req, res) => {
      const { email } = req.params;
      const bookings = await bookingsCollection
        .find({ userEmail: email })
        .toArray();
      res.json(bookings);
    });

    app.get("/my-added-cars/:email",verifyToken, async (req, res) => {
      try {
        const { email } = req.params;
        const result = await carsCollection
          .find({ userEmail: email })
          .toArray();
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get("/cars/:id",async (req, res) => {
      const id = req.params.id;
      const result = await carsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    app.post("/cars",verifyToken, async (req, res) => {
      try {
        const carData = req.body;

        const result = await carsCollection.insertOne({
          ...carData,
          bookingCount: 0,
        });

        res.send(result);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    app.get("/available", async (req, res) => {
      const result = await carsCollection.find().limit(6).toArray();
      res.send(result);
    });

    app.delete("/bookings/:id",verifyToken, async (req, res) => {
      try {
        const { id } = req.params;

        const booking = await bookingsCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!booking) {
          return res.status(404).send({
            message: "Booking not found",
          });
        }

        const result = await bookingsCollection.deleteOne({
          _id: new ObjectId(id),
        });

        await carsCollection.updateOne(
          { _id: new ObjectId(booking.carId) },
          {
            $inc: {
              bookingCount: -1,
            },
          },
        );

        res.send(result);
      } catch (error) {
        res.status(500).send({
          message: error.message,
        });
      }
    });
    app.delete("/my-added-cars/:carId",verifyToken, async (req, res) => {
      try {
        const { carId } = req.params;
        const result = await carsCollection.deleteOne({
          _id: new ObjectId(carId),
        });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to DriveFleet Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
