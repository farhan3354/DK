import React from 'react';

const DoctorProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
        <div className="flex-shrink-0 md:w-1/3">
          <img
            src="https://i.imgur.com/0bW5L1L.jpg"
            alt="Dr. Muhammad Saleem Akhtar"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800">
            Prof. Dr. Muhammad Saleem Akhtar
          </h1>
          <p className="text-lg text-gray-600">Urologist</p>
          <p className="text-lg text-gray-600">MBBS, MS (Urology)</p>
          <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-4">
            <div className="bg-gray-100 rounded-md p-3">
              <p className="font-bold text-gray-800">Wait Time</p>
              <p className="text-gray-600">15 - 30 Min</p>
            </div>
            <div className="bg-gray-100 rounded-md p-3">
              <p className="font-bold text-gray-800">Experience</p>
              <p className="text-gray-600">34 Years</p>
            </div>
            <div className="bg-gray-100 rounded-md p-3">
              <p className="font-bold text-gray-800">Satisfied Patients</p>
              <p className="text-gray-600">98% (92)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Prof. Dr. Muhammad Saleem Akhtar's Reviews (92)
        </h2>
        <div className="mt-4">
          <div className="bg-gray-100 rounded-md p-4">
            <div className="flex items-center mb-2">
              <div className="bg-black text-white rounded-full p-2 mr-2">
                98%
              </div>
              <p className="text-gray-600">Satisfied out of 92 patients</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Doctor Checkup</p>
                <div className="w-1/2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Clinic Environment</p>
                <div className="w-1/2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: '99%' }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Staff Behaviour</p>
                <div className="w-1/2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: '99%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-gray-600">
              "I was very nervous before discussing anything with the doctor but
              later I feel comfortable when I meet with the doctor.I appreciate
              it."
            </p>
            <p className="text-gray-600 mt-2">
              Verified patient: A** ***a . 1 month ago
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 md:w-1/2">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Doctors Hospital
          </h2>
          <div className="bg-gray-100 rounded-md p-3 mb-4">
            <p className="font-bold text-gray-800">Fee:</p>
            <p className="text-gray-600">Rs. 4,000</p>
          </div>
          <div className="bg-gray-100 rounded-md p-3 mb-4">
            <p className="font-bold text-gray-800">Address:</p>
            <p className="text-gray-600">
              152 A - G/1, Canal Bank, Johar Town.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-green-500 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600">Available today</p>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600">
              11:00 AM - 01:00 PM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md w-full">
            Book Appointment
          </button>
          <div className="flex items-center mt-4">
            <div className="bg-gray-200 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.89l.791 3.286c.306.121.53.291.707.495l5.52 5.52a1 1 0 01.03.128.33.33 0 01-.19.07l-.591-.07c-.275-.026-.547-.11-.79-.209V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.89l-.791-3.286c-.306-.121-.53-.291-.707-.495L2.19 8.39a1 1 0 01-.03-.128.33.33 0 01.19-.07l.591.07c.275.026.547.11.79.209v8.607a1 1 0 011 1h7.754a1 1 0 01.986-.89l.791-3.286c.306-.121.53-.291.707-.495l5.52-5.52a1 1 0 01.03-.128.33.33 0 01-.19-.07l-.591-.07c-.275-.026-.547-.11-.79-.209V3a1 1 0 011-1H3a1 1 0 01-1-1zm-1 10a1 1 0 011 1h12a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z"
                />
              </svg>
            </div>
            <p className="text-gray-600">Priorty customer support</p>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 5v-5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0H7v2h2V8zm2 0H9v2h2V8zm2 0H11v2h2V8zm2 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600">100% secure</p>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v13a1 1 0 102 0V3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600">Book Appointmet in 30 sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;