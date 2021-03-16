import React from "react";
import Footer from "./Common/Footer";
import bmg from "../src/images/Momo.JPG";
import Grid from "./Common/Grid";
import Pagebar from "./Common/Pagebar";

import Card from "./Common/Card";

const Home = () => {
  return (
    <>
      <Grid
        name={
          <h4>
            "The Best Things Happen <br></br>Outside Of Our Comfort Zones"
          </h4>
        }
        imgsrc={bmg}
        visit="/about"
        btname="Get Started"
        transp={
          <p>
            <b>Mohtasham Naqvi</b>
            <br></br>
            <br></br> DOB: 17/09/19977<br></br>
            <br></br> Contact: +923049745726<br></br>
            <br></br> P A K I S T A N
          </p>
        }
      />
      <Pagebar />
      <Footer />
    </>
  );
};

export default Home;
