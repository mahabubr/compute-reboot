const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vlhy1ml.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const ComputeRebootCollection = client.db("compute-reboot");

    const CatagoriesCollections =
      ComputeRebootCollection.collection("categories");

    if (req.method === "GET") {
      const result = await CatagoriesCollections.find({}).toArray();
      res.send({
        message: "Categories get successful",
        status: 200,
        data: result,
      });
    }

    console.log("database connect");
  } catch (e) {
    res.send({
      message: "Something went wrong",
      status: 400,
      data: e.message,
    });
  }
}

export default run;
