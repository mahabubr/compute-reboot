import client from "@/utils/db";

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
