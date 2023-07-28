import Catagories from "@/components/Home/Catagories/Catagories";
import Products from "@/components/Home/Products/Products";

const Home = ({ products, catagories }) => {
  return (
    <div className="container mx-auto w-11/12">
      <Products products={products} />
      <Catagories catagories={catagories} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const res1 = await fetch("http://localhost:3000/api/categories");
  const catagories = await res1.json();

  return {
    props: {
      products: data.data,
      catagories: catagories.data,
    },
    revalidate: 100,
  };
};

export default Home;
