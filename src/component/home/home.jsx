import React from 'react';
import image1 from '../../img/BG.png';
import image2 from '../../img/Frame108.png';
import image3 from '../../img/Startup.png';
import { FaFacebook } from 'react-icons/fa';
import { BsCameraFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <div className="absolute">
        <div className="absolute top-40 left-20 xl:left-28">
          <h1 className="font-bold text-4xl text-left mb-3">
            Ceritakan Tentang
          </h1>
          <h1 className="font-bold text-4xl text-left mb-5">Startup Anda</h1>
          <p className="font-medium text-sm text-slate-400 text-left">
            Kami akan membantu menganalisa dan memahami{' '}
          </p>
          <p className="font-medium text-sm text-slate-400 text-left">
            {' '}
            bagaimana berharganya perusahaan anda
          </p>
          <div className="flex justify-between mt-8">
            <button className="bg-white rounded-lg border w-40 h-12 text-slate-400 hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out">
              Coba Demo
            </button>
            <button className="bg-sky-600 rounded-lg border w-40 h-12 text-white hover:bg-sky-500 transition duration-300 ease-in-out">
              Beli Sekarang
            </button>
          </div>
          <div className="text-center mt-8">
            <div className="absolute top-[17rem] w-24 h-[2px] bg-sky-500"></div>
            <div className="absolute top-[17rem] w-24 h-[2px] left-[14.5rem] bg-sky-500"></div>
            <div className="flex flex-row items-center justify-center space-x-5">
              <FaFacebook className=" text-slate-500" />
              <BsCameraFill className=" text-slate-500" />
              <FaLinkedin className=" text-slate-500" />
            </div>
          </div>
        </div>
        <img
          src={image1}
          alt="background"
          className="max-w-full w-full max-h-full h-[40rem] lg:h-[38rem] xl:h-[42rem] top-0 2xl:h-full"
        />
        <img
          src={image2}
          alt="background"
          className="w-1/3 h-1/3 absolute top-[81%]"
        />
        <div className="hidden  lg:block lg:absolute lg:top-1/3 xl:top-1/4 lg:left-[52%] xl:left-[58%] w-full h-full">
          <img
            src={image3}
            alt="background"
            className="w-96 h-50 top-0 xl:w-1/3 xl:h-[60%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
