import React from 'react';

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
    </div>
  );
}

export default Footer;
