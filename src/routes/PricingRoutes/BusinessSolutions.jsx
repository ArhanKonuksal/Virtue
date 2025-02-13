import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { PricingDetails } from '../../components/PricingDetails/PricingDetails'
import CoreVirtuesValues from '../../components/CoreVirtuesValues/CoreVirtuesValues'
import Footer from '../../components/Footer/Footer'

const BusinessSolutions = () => {
  return (
    <>
    <Navbar />
    <PricingDetails 
      title="Business Solutions"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <CoreVirtuesValues />
    <Footer />
    </>
  )
}

export default BusinessSolutions