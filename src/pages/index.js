import Products from "@/components/Home/Products/Products";

const Home = ({ products }) => {
  return (
    <div className="container mx-auto w-11/12">
      <Products products={products} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
    revalidate: 100,
  };
};

export default Home;
