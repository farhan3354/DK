import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-[300px] h-[350px]">
        <input type="checkbox" id="toggle" className="peer hidden" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <label htmlFor="toggle" className="relative cursor-pointer w-[50px] h-[20px] flex flex-col items-center gap-2">
            <div className="absolute text-gray-700 font-semibold -left-[70px] top-0 w-[100px] text-center underline peer-checked:left-0 peer-checked:-translate-x-[70px] transition-transform">Log in</div>
            <div className="absolute text-gray-700 font-semibold -right-[70px] top-0 w-[100px] text-center peer-checked:right-0 peer-checked:translate-x-[70px] transition-transform">Sign up</div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-full bg-gray-200 rounded-lg border border-gray-700 shadow-lg transition-transform duration-300 peer-checked:rotate-y-180">
                <div className="absolute w-full h-full flex items-center justify-center bg-gray-100 p-5 rounded-lg border border-gray-700 shadow-lg backface-hidden peer-checked:hidden">
                  <div className="text-gray-700 text-2xl font-extrabold mb-4">Log in</div>
                  <form className="flex flex-col items-center gap-4 w-full">
                    <input type="email" placeholder="Email" className="w-[250px] h-[40px] rounded-lg border-2 border-gray-700 bg-white px-3 py-2 text-gray-700 font-semibold placeholder-gray-400 focus:border-blue-500 outline-none" />
                    <input type="password" placeholder="Password" className="w-[250px] h-[40px] rounded-lg border-2 border-gray-700 bg-white px-3 py-2 text-gray-700 font-semibold placeholder-gray-400 focus:border-blue-500 outline-none" />
                    <button className="w-[120px] h-[40px] rounded-lg border-2 border-gray-700 bg-white text-gray-700 font-semibold shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95">Let's go!</button>
                  </form>
                </div>
                <div className="absolute w-full h-full flex items-center justify-center bg-gray-100 p-5 rounded-lg border border-gray-700 shadow-lg backface-hidden rotate-y-180 peer-checked:rotate-y-0">
                  <div className="text-gray-700 text-2xl font-extrabold mb-4">Sign up</div>
                  <form className="flex flex-col items-center gap-4 w-full">
                    <input type="text" placeholder="Name" className="w-[250px] h-[40px] rounded-lg border-2 border-gray-700 bg-white px-3 py-2 text-gray-700 font-semibold placeholder-gray-400 focus:border-blue-500 outline-none" />
                    <input type="email" placeholder="Email" className="w-[250px] h-[40px] rounded-lg border-2 border-gray-700 bg-white px-3 py-2 text-gray-700 font-semibold placeholder-gray-400 focus:border-blue-500 outline-none" />
                    <input type="password" placeholder="Password" className="w-[250px] h-[40px] rounded-lg border-2 border-gray-700 bg-white px-3 py-2 text-gray-700 font-semibold placeholder-gray-400 focus:border-blue-500 outline-none" />
                    <button className="w-[120px] h-[40px] rounded-lg border-2 border-gray-700 bg-white text-gray-700 font-semibold shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95">Confirm!</button>
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
