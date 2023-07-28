import client from "@/utils/db";

async function run(req, res) {
  try {
    await client.connect();

    const ComputeRebootCollection = client.db("compute-reboot");
    const ProductsCollection = ComputeRebootCollection.collection("products");

    if (req.method === "GET") {
      if (req.query.category) {
        const id = req.query.category;
        const result = await ProductsCollection.find({
          "category.id": id,
        }).toArray();
        return res.status(200).json({
          message: "Category products get successful",
          status: 200,
          data: result,
        });
      } else {
        const result = await ProductsCollection.find({}).toArray();
        return res.status(200).json({
          message: "Products get successful",
          status: 200,
          data: result,
        });
      }
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
