// import React from 'react';

// const UserInfo = () => {
//     // Hard-coded array of client objects
//     const clients = [
//         {
//             Name: 'John Doe',
//             Email: 'johndoe@example.com',
//             Contact: '+123456789',
//             Subject: 'Investment Query',
//             Message: 'I am interested in your investment plans.',
//         },
//         {
//             Name: 'Jane Smith',
//             Email: 'janesmith@example.com',
//             Contact: '+987654321',
//             Subject: 'General Inquiry',
//             Message: 'I have a few questions about your services.',
//         },
//         // Add more clients as needed
//     ];

//     return (
//         <div className="w-full max-w-4xl p-6 mx-auto mt-8 rounded-lg shadow-md">
//             <h2 className="mb-6 text-2xl font-bold text-black">User Information</h2>
//             {clients.map((client, clientIndex) => (
//                 <div
//                     key={clientIndex}
//                     className="p-4 mb-8 border border-gray-300 rounded-lg shadow-md bg-gray-50"
//                 >
//                     <h3 className="mb-4 text-xl font-semibold">Client {clientIndex + 1}</h3>
//                     <table className="w-full border-collapse table-auto">
//                         <thead>
//                             <tr className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
//                                 <th className="px-2 py-2 text-xs font-semibold text-left text-gray-700 border-b md:px-4 md:py-2 md:text-sm">Field</th>
//                                 <th className="px-2 py-2 text-xs font-semibold text-left text-gray-700 border-b md:px-4 md:py-2 md:text-sm">Details</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Object.entries(client).map(([field, detail], index) => (
//                                 <tr
//                                     key={index}
//                                     className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
//                                 >
//                                     <td className="px-2 py-2 text-xs text-gray-600 border-b md:px-4 md:py-2 md:text-sm">{field}</td>
//                                     <td className="px-2 py-2 text-xs text-black border-b md:px-4 md:py-2 md:text-sm">{detail}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default UserInfo;


import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5000/contacts'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="w-full max-w-4xl p-6 mx-auto mt-8">
      <h2 className="mb-6 text-2xl font-bold text-black">User Information</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold mb-4">Contact {index + 1}</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900">{contact.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-900">{contact.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Message:</span>
                <span className="text-gray-900">{contact.message}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Subject:</span>
                <span className="text-gray-900">{contact.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Contact:</span>
                <span className="text-gray-900">{contact.contact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
