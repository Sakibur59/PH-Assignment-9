const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
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

async function run() {
  try {
    await client.connect();

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

    app.post("/bookings", async (req, res) => {
      try {
        const bookingData = req.body;
        bookingData.bookingDate = new Date();
        const result = await bookingsCollection.insertOne(bookingData);
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get("/bookings/:email", async (req, res) => {
      const { email } = req.params;
      const bookings = await bookingsCollection
        .find({ userEmail: email })
        .toArray();
      res.json(bookings);
    });

    app.get("/cars/:id", async (req, res) => {
      const id = req.params.id;
      const result = await carsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    app.post("/cars", async (req, res) => {
      const carData = req.body;
      console.log("Received car data:", carData);
      const result = await carsCollection.insertOne(carData);
      res.send(result);
    });

    app.get("/featured", async (req, res) => {
      const result = await carsCollection.find().limit(6).toArray();
      res.send(result);
    });

   app.delete('/bookings/:bookingId', async (req, res) => {
  try {
    const { bookingId } = req.params;
    const result = await bookingsCollection.deleteOne({ _id: new ObjectId(bookingId) });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

    await client.db("admin").command({ ping: 1 });
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
