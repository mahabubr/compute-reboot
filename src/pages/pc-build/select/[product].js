import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const SelectProduct = ({ category }) => {
  return (
    <div className="container mx-auto w-11/12 my-20">
      <div>
        <h2 className="text-center text-xl text-orange-600 font-black">
          Category Products
        </h2>
        <p className="text-center text-sm my-1 text-gray-700">
          Check & Get Your Desired Product !
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        {category.map(
          ({
            _id,
            image,
            product_name,
            category,
            price,
            status,
            average_rating,
          }) => (
            <Card
              key={_id}
              hoverable
              className="flex justify-start items-center"
              cover={
                <Image
                  src={image}
                  className="object-cover w-56"
                  height={200}
                  width={100}
                  alt=""
                />
              }
            >
              <div>
                <h3 className="text-md font-medium text-justify ">
                  {product_name}
                </h3>
                <h4 className="text-md mt-1 text-orange-600">
                  {category.name}
                </h4>
                <p className="mt-1 text-green-600 font-bold">$ {price}</p>
                <div className="flex items-center gap-5">
                  <p className="mt-1 text-gray-600 font-bold">{status}</p>
                  <p className="mt-1 text-red-600">{average_rating} out of 5</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/pc-build">
                  <Button type="default">Add To Builder</Button>
                </Link>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  const paths = data.data.map((cat) => ({
    params: {
      product: cat._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.product}`
  );
  const data = await res.json();

  return {
    props: {
      category: data.data,
    },
  };
};

export default SelectProduct;
