import React from "react";
import Banner from "../components/banner";
import { useGlobalContext } from "../contex";

const Home = () => {
  return (
    <section className="home">
      <Banner></Banner>
    </section>
  );
};

export default Home;
