const Home = () => {
  return (
    <div className="container mx-auto w-11/12">
      <h1>Hello World</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
