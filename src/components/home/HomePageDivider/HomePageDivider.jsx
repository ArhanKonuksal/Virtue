import React from "react";
import "../HomePageDivider/HomePageDivider.css";

const HomePageDivider = (props) => {
  return (
    <>
      <div className="divider">
        <div
          alt="DividerImg"
          style={{
            backgroundImage: `url(${props.DividerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
          <div className="divider-text">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageDivider;
