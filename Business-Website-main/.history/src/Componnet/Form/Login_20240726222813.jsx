import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[360px] h-[450px]">
        <input type="checkbox" id="toggle" className="peer hidden" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <label htmlFor="toggle" className="relative cursor-pointer w-[60px] h-[24px] flex flex-col items-center gap-2">
            <div className="absolute text-gray-700 font-semibold -left-[80px] top-0 w-[120px] text-center underline peer-checked:left-0 peer-checked:-translate-x-[80px] transition-transform">Log in</div>
            <div className="absolute text-gray-700 font-semibold -right-[80px] top-0 w-[120px] text-center peer-checked:right-0 peer-checked:translate-x-[80px] transition-transform">Sign up</div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-full bg-white rounded-lg border border-gray-300 shadow-lg transition-transform duration-300 peer-checked:rotate-y-180">
                <div className="absolute w-full h-full flex items-center justify-center bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-lg backface-hidden peer-checked:hidden">
                  <div className="text-gray-700 text-2xl font-bold mb-4">Log in</div>
                  <form className="flex flex-col items-center gap-5 w-full">
                    <input type="email" placeholder="Email" className="w-full max-w-[300px] h-[45px] rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium placeholder-gray-400 focus:border-blue-500 outline-none transition-colors" />
                    <input type="password" placeholder="Password" className="w-full max-w-[300px] h-[45px] rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium placeholder-gray-400 focus:border-blue-500 outline-none transition-colors" />
                    <button className="w-full max-w-[150px] h-[45px] rounded-lg border-2 border-blue-500 bg-blue-500 text-white font-semibold shadow-lg transition-transform duration-150 hover:bg-blue-600 active:bg-blue-700">Let's go!</button>
                  </form>
                </div>
                <div className="absolute w-full h-full flex items-center justify-center bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-lg backface-hidden rotate-y-180 peer-checked:rotate-y-0">
                  <div className="text-gray-700 text-2xl font-bold mb-4">Sign up</div>
                  <form className="flex flex-col items-center gap-5 w-full">
                    <input type="text" placeholder="Name" className="w-full max-w-[300px] h-[45px] rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium placeholder-gray-400 focus:border-blue-500 outline-none transition-colors" />
                    <input type="email" placeholder="Email" className="w-full max-w-[300px] h-[45px] rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium placeholder-gray-400 focus:border-blue-500 outline-none transition-colors" />
                    <input type="password" placeholder="Password" className="w-full max-w-[300px] h-[45px] rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium placeholder-gray-400 focus:border-blue-500 outline-none transition-colors" />
                    <button className="w-full max-w-[150px] h-[45px] rounded-lg border-2 border-green-500 bg-green-500 text-white font-semibold shadow-lg transition-transform duration-150 hover:bg-green-600 active:bg-green-700">Confirm!</button>
                  </form>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
