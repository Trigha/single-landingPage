import React from 'react';

function Pricing() {
  return (
    <div>
      <div className="flex justify-center items-center justify-around mt-44 ">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-300 ease-in-out"
          >
            Yearly
          </button>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-gray-100 text-black font-medium text-xs leading-tight uppercase hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-300 ease-in-out"
          >
            Monthly
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl md:text-5xl text-left">
            Penilaian yang tepat
          </h1>
          <h1 className="font-bold text-xl md:text-5xl text-left">
            untuk rencana kedepan
          </h1>
        </div>
      </div>
      {/* start card */}
      <div className="p-20 lg:flex lg:justify-around">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
          {/* free */}
          <div className="bg-gray-100 w-64 h-80 py-7  mx-auto">
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-slate-500 font-normal mb-5">Starter</p>
              <h1 className="text-5xl font-bold mb-10">Free</h1>
              <p className="text-xs font-bold text-slate-500 mb-6">
                1 Perusahaan
              </p>
              <p className="text-xs font-bold text-slate-500 mb-6">
                Penilaian 1 Bulan
              </p>
              <p className="text-xs font-bold text-slate-500 mb-5">
                No Detail Report
              </p>

              <button className="bg-white text-sm text-blue-600 font-bold py-2 px-4 w-[85%] rounded-lg hover:bg-gray-300 hover:text-blue-400 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
          {/* end free */}
          {/* premium */}
          <div className="bg-blue-500 w-64 h-80 py-7  mx-auto">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white text-sm  font-normal mb-5">Premium</p>
              <h1 className="text-white text-5xl font-bold mb-10">
                $29<span className="text-white text-sm font-bold">/month</span>
              </h1>
              <p className="text-white text-xs font-bold  mb-6">5 Perusahaan</p>
              <p className="text-white text-xs font-bold  mb-6">
                Penilaian 6 Bulan
              </p>
              <p className="text-white text-xs font-bold mb-5">Detail Report</p>

              <button className="text-white bg-blue-700 font-bold text-sm py-2 px-4 w-[85%] rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
          {/* end premium */}
          {/* enterprise */}
          <div className="bg-gray-100 w-64 h-80 py-7  mx-auto">
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-slate-500 font-normal mb-5">
                Enterprise
              </p>
              <h1 className="text-5xl font-bold mb-10">
                $49<span className="text-sm font-bold">/month</span>
              </h1>
              <p className="text-xs font-bold text-slate-500 mb-6">
                10 Perusahaan
              </p>
              <p className="text-xs font-bold text-slate-500 mb-6">
                Penilaian 1 Tahun
              </p>
              <p className="text-xs font-bold text-slate-500 mb-5">
                Detail Report
              </p>

              <button className="bg-white text-sm text-blue-600 font-bold py-2 px-4 w-[85%] rounded-lg hover:bg-gray-300 hover:text-blue-400 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
          {/* end enterprise */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
