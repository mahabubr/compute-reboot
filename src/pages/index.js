import Catagories from "@/components/Home/Catagories/Catagories";
import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Home/Products/Products";
import Head from "next/head";

const Home = ({ products, catagories }) => {
  return (
    <div>
       <Head>
        <title>Compute Reboot</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Products products={products} />
      <Catagories catagories={catagories} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://compute-reboot.vercel.app/api/products");
  const data = await res.json();

  const res1 = await fetch("https://compute-reboot.vercel.app/api/categories");
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
