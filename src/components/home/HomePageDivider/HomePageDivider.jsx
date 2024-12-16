import React from 'react'
import "../HomePageDivider/HomePageDivider.css";

const HomePageDivider = (props) => {
  return (
    <>
    <div className="divider">
      <img alt="DividerImg" src={props.DividerImg} />
      <div className="divider-text">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
    </>
  )
}

export default HomePageDivider