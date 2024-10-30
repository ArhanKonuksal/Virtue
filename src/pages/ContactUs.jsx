import React from 'react'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero2 from "../components/Hero2/Hero2"
import ContactForm from "../components/ContactForm/Form"
import Divider from '../components/Divider/Divider'

const Contact = () => {
  return (
  <>
    <Navbar />
    <Hero2 />
    <ContactForm />
    <Divider />
    <div className='last-part'>
      <h1>Connect with Our Experts</h1>
      <p>Schedule your free face-to-face appointment at our cutting-edge Marbella or Barcelona facilities, or opt for a virtual consultation.</p>
      <button>Book Consultation</button>
    </div>
    <Footer />
  </>
  )
}

export default Contact