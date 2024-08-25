import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
const ContactUs = () => {
  return (
    <div className=' bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-4 md:p-12'>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Contact Us</h1>
        <p className="mt-4 text-base">
          For any inquiries or assistance, please don’t hesitate to reach out to us <br />at DK Group.
        </p>
      </div>
      <h1 className="text-5xl font-bold text-black pl-56 m-8 ">Get in touch</h1>
      <Form/>


       <div>
        Make Faqs question list
        i will give you provide information
        Can you elaborate on any recent successful investment ventures or portfolio diversification strategies undertaken by DK Group?
Recently, DK Group successfully ventured into renewable energy projects, capitalising on the growing demand for clean energy solutions. Additionally, its strategic investments in emerging markets have yielded favourable returns, demonstrating its commitment to portfolio diversification and global growth opportunities.
       </div>




        </ div>
        
  )
}

export default ContactUs;