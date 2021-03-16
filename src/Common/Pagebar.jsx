import React from "react";
import fffbbb from "../images/fffbbb.png";
import eyecon from "../images/eyecon.png";
import dsign from "../images/dsign.png";

export const Pagebar = () => {
  return (
    <>
      <section id="pagebar" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-4 mx-auto">
              <img className="border-img" src={fffbbb}></img>
              <p className="icons">
                <b>
                  <br />
                  Traveled Cities
                </b>
              </p>
              <h3>67</h3>
            </div>
            <div className="col-4 mx-auto">
              <img className="border-img" src={eyecon}></img>
              <p className="icons">
                <b>
                  <br />
                  Photos Posted
                </b>
              </p>
              <h3>180</h3>
            </div>
            <div id="barheading" className="col-4 mx-auto">
              <img className="border-img" src={dsign}></img>
              <p className="icons">
                <b>
                  <br />
                  Designs Created
                </b>
              </p>
              <h3>72</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pagebar;
