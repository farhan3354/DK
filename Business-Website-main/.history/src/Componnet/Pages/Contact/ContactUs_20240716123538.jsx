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


      <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-8">FAQs</h2>
                <ul className="space-y-6">
                    <li>
                        <h3 className="text-lg font-semibold mb-2">Can you elaborate on any recent successful investment ventures or portfolio diversification strategies undertaken by DK Group?</h3>
                        <p className="text-gray-700">Recently, DK Group successfully ventured into renewable energy projects, capitalizing on the growing demand for clean energy solutions. Additionally, its strategic investments in emerging markets have yielded favorable returns, demonstrating its commitment to portfolio diversification and global growth opportunities.</p>
                    </li>
                    {/* Add more FAQs here if needed */}
                </ul>
            </div>
        </div>




        </ div>
        
  )
}

export default ContactUs;