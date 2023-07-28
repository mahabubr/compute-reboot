import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const CategoryDetails = ({ category }) => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
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
            <Link key={_id} href={`/product/${_id}`} className="no-underline">
              <Card
                hoverable
                cover={<Image src={image} height={200} width={200} alt="" />}
              >
                <h3 className="text-md font-medium text-justify h-14">
                  {product_name}
                </h3>
                <h4 className="text-lg mt-1 text-orange-600">
                  {category.name}
                </h4>
                <p className="mt-1 text-green-600 font-bold">$ {price}</p>
                <p className="mt-1 text-gray-600 font-bold">{status}</p>
                <p className="mt-1 text-red-600">{average_rating} out of 5</p>
              </Card>
            </Link>
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
      id: cat._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      category: data.data,
    },
  };
};

export default CategoryDetails;
