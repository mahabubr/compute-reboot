import Image from "next/image";

const Product = ({ product }) => {
  const {
    image,
    product_name,
    category,
    price,
    status,
    description,
    key_features,
    individual_rating,
    average_rating,
    reviews,
  } = product;

  return (
    <div className="container mx-auto w-11/12 my-20">
      <div className="lg:flex justify-center items-center gap-10 ">
        <div className="lg:w-6/12">
          <Image
            src={image}
            width={600}
            height={500}
            alt=""
            style={{ width: "100%" }}
            className="object-cover rounded-md drop-shadow-2xl"
          />
        </div>
        <div className="lg:w-6/12 mt-5 lg:mt-0">
          <h2 className="text-2xl text-sky-800">{product_name}</h2>
          <h3 className="text-lg font-normal text-orange-600 mt-2">
            Category : {category.name}
          </h3>
          <div className="mt-4 flex justify-between ">
            <p className="bg-purple-500 px-4 py-2 text-white font-bold rounded-full">
              Price: $ {price}
            </p>
            <p className="bg-purple-500 px-4 py-2 text-white font-bold rounded-full">
              Status: {status}
            </p>
          </div>
          <p className="mt-6 text-gray-600 leading-6 tracking-wider">
            {description}
          </p>
          <div className="mt-8 space-y-2 ">
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              brand : {key_features.brand}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              model : {key_features.model}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              specification : {key_features.specification}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              port : {key_features.port}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              resolution : {key_features.resolution}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              type : {key_features.type}
            </p>
            <p className="bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold inline-block mr-3">
              voltage : {key_features.voltage}
            </p>
          </div>
          <div className="mt-10 space-y-2">
            <p className="text-red-600 font-semibold drop-shadow-md">Individual Rating: {individual_rating} out of 5</p>
            <p className="text-red-600 font-semibold drop-shadow-md">Average Rating: {average_rating} out of 5</p>
            <p className="text-red-600 font-semibold drop-shadow-md">Reviews: {reviews} user</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: {
      productDetails: product._id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?product=${params.productDetails}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};

export default Product;
