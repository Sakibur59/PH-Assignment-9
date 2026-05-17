const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require("mongodb");
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
