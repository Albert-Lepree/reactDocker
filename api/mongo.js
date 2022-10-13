var { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

var url = "mongodb://main:K00lcats1@db:27017/"; // HAHAHAHAHAHAHAHAHAHAH
const client = new MongoClient(url);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    await seed();
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    console.log("done");
  }
}
run().catch(console.dir);

async function seed() {
  var db1 = client.db("database1");
  db1.collection("analytics").insertMany([
    { id: 1, title: "data", src: "../src/components/img/RFmetrics.png" },
    { id: 2, title: "dog", src: "../src/components/img/dog.jpg" },
    { id: 3, title: "No Image", src: null }
  ]);
}
