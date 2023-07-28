const Product = ({ product }) => {
  console.log(product);
  return <div className="container mx-auto w-11/12 my-20">Product</div>;
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
