import React from 'react';
import Fb from '../../img/fb.png';
import In from '../../img/in.png';
import Twt from '../../img/twt.png';

function Footer() {
  return (
    <div>
      <div className="bg-blue-600 w-full h-64 py-3">
        <div className="flex flex-col justify-center items-center mt-10 ">
          <h1 className="text-white font-bold text-2xl">Mau Coba Gratis ?</h1>
          <p className="text-center text-sm font-medium text-white mt-5">
            Kalian bisa mencoba gratis terlebih dahulu selama 7 hari untuk
          </p>
          <p className="text-center text-sm font-medium text-white">
            melihat dan memahami apa yang kita lakukan dalam menilai
          </p>
          <p className="text-center text-sm font-medium text-white">
            perusahaan dengan menginput email yang akan dijadikan akun.
          </p>

          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className="mt-5 bg-blue-600 border border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-text-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email address"
          ></input>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl text-blue-700 text-center md:text-left">
            Finmod.id
          </h1>
          <p className="text-slate-500 font-light text-sm text-center md:text-left mt-5">
            Platform penilaian online untuk startup dan UMKM.
          </p>
          <p className="text-slate-500 font-light text-sm text-center md:text-left">
            Ini lebih cepat dan lebih hemat biaya daripada cara
          </p>
          <p className="text-slate-500 font-light text-sm text-center md:text-left">
            tradisional.
          </p>
          <div className="flex justify-center md:justify-start">
            <img src={Fb} className="w-8 h-8 mt-5" />
            <img src={In} className="w-8 h-8 mt-5 ml-5" />
            <img src={Twt} className="w-8 h-8 mt-5 ml-5" />
          </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:mx-10">
          <h1 className="text-xl font-bold">Findmod</h1>
          <p className="text-slate-400 text-sm font-normal mt-10">About</p>
          <p className="text-slate-400 text-sm font-normal mt-5">Price</p>
          <p className="text-slate-400 text-sm font-normal mt-5">Karir</p>
          <p className="text-slate-400 text-sm font-normal mt-5">Contact</p>
        </div>
        <div className="hidden md:flex md:flex-col lg:mx-10">
          <h1 className="text-xl font-bold">Product</h1>
          <p className="text-slate-400 text-sm font-normal py-5">
            Laporan Penilaian
          </p>
          <p className="text-slate-400 text-sm font-normal py-5">Metode</p>
          <p className="text-slate-400 text-sm font-normal py-5">
            Akurasi Data
          </p>
        </div>
      </div>
      <h1 className="text-slate-500 font-md font-bold mt-10">
        All Rights Reserved @2022
      </h1>
    </div>
  );
}

export default Footer;
