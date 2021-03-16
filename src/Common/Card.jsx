import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="fourgrids" src={props.crdimg} />
          </div>
          <div className="flip-card-back">
            <div>{props.crdtxt}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
