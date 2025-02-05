import React from 'react'
//import './Form.css'

const Form = () => {
  return (
    <>
        <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Surname</label>
            <input type="email"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Mesajınızı buraya yazınız"/>
        </form>
        <input type='checkbox' />
        <input type='checkbox' />
        <button className="btn">Send</button>
    </div>
    </>
  )
}

export default Form