import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Faqs from './Faqs'
const ContactUs = () => {
  return (
    <div className='p-4 bg-white  md:p-12'>
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="m-5 text-5xl font-bold text-yellow-500">Contact Us</h1>
        <p className="mt-4 text-base">
          For any inquiries or assistance, please don’t hesitate to reach out to us <br />at DK Group.
        </p>
      </div>
      <h1 className="pl-4 m-4 text-3xl font-bold text-black md:text-4xl lg:text-5xl md:pl-8 lg:pl-56 md:m-6 lg:m-8">
  Get in touch
</h1>

      <Form/>
      <Faqs/>
        </ div>
        
  )
}

export default ContactUs;