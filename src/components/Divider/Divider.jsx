import React from 'react'

const Divider = (props) => {
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

export default Divider