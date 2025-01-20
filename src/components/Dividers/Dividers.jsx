import React from "react";
import "./Dividers.css";

const Divider = (props) => {
  return (
    <>
      <div className="dividers">
        <img alt="DividerImg" src={props.dividerImg} />
      </div>
    </>
  );
};

export default Divider;
