import React from "react";
import Footer from "./Common/Footer";
import Card from "./Common/Card";
import myimage from "./images/sldone.jpg";

const Gallery = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
      </div>
      {/* gallery row 2 */}
      <div class="row">
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
        <div class="column">
          <Card crdimg={myimage} crdtxt={<p>This is my first Photo</p>} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Gallery;
