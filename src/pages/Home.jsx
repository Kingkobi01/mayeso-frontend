import React from "react";
import { Hero } from "../components";

function Home() {
  return (
    <div className="">
      <Hero
        img={"/assets/homeHero.gif"}
        headText={"Unlock Your Potential with Mayeso"}
        subText={"Your Personal Learning Companion"}
        page={"home"}
      />
    </div>
  );
}

export default Home;
