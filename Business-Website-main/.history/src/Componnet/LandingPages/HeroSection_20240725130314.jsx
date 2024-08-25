import React from 'react';

const InvestmentTree = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-100">
      <div className="relative w-96 h-96">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-2 h-24 bg-black rounded-full"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
        </div>

        {/* Branches */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
          <div className="w-2 h-48 bg-black rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-135">
          <div className="w-2 h-48 bg-black rounded-full"></div>
        </div>

        {/* Plans */}
        <div className="absolute top-10 left-20">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">DK Shares</h2>
            <p className="text-sm text-center">
              DK Group's Personal Projects, tailoring investments to match
              your unique goals and aspirations Projects: Elisha, Loja,
              Gotrolly, Social Swirl and many more
            </p>
          </div>
        </div>
        <div className="absolute top-36 left-16">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Sharing Plan
            </h2>
            <p className="text-sm text-center">
              Join the DK Group network and amplify your financial potential
              through strategic partnerships.
            </p>
          </div>
        </div>
        <div className="absolute top-60 left-4">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              One Million Plan
            </h2>
            <p className="text-sm text-center">
              DK Group presents the One Million Investment Plan, a gateway to
              substantial growth and financial empowerment tailored for
              ambitious investors
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-20">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Students Plan
            </h2>
            <p className="text-sm text-center">
              In our investment Journey DK provides handsome opportunity to our
              young talents to invest and earn attractive pocket expense
            </p>
          </div>
        </div>
        <div className="absolute top-36 right-16">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Gold Plan
            </h2>
            <p className="text-sm text-center">
              Elevate your investment strategy with DK Group's Gold Plan, where
              timeless value meets long-term wealth preservation
            </p>
          </div>
        </div>
        <div className="absolute top-60 right-4">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Stock Market Plan
            </h2>
            <p className="text-sm text-center">
              DK Group navigates the sharemarket for you, ensuring diversified
              investments and optimal returns.
            </p>
          </div>
        </div>
        <div className="absolute top-40 right-40">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Car Finance
            </h2>
            <p className="text-sm text-center">
              Drive your financial goals forward with DK Group's tailored car
              financing solutions, for smart investment choices
            </p>
          </div>
        </div>
        <div className="absolute top-40 left-40">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mb-2">
              Real Estate
            </h2>
            <p className="text-sm text-center">
              Invest in the future with DK Group's real estate plans, securing
              your wealth through prime properties and steady appreciation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default