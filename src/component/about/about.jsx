import React from 'react';
import iconGear from '../../img/Methode.png';
import iconDokumen from '../../img/Paper.png';
import iconShield from '../../img/Shield.png';
import iconPanah from '../../img/Vector.png';
import iconPen from '../../img/Edit.png';
import iconDollar from '../../img/Dollar.png';
import bgAbout from '../../img/Group.png';
import bgAbout2 from '../../img/Group103.png';
import bgAbout3 from '../../img/Group3.png';
import startUp from '../../img/StartupLife.png';
import imgPeople from '../../img/imagePPL.png';
import imgCentang from '../../img/close1.png';

function About() {
  return (
    <div className="pt-[50rem] h-full">
      <div className="mx-auto">
        <h1 className="font-bold text-3xl text-center">Mengapa Harus Kami</h1>

        <p className="font-medium text-slate-500 text-center text-md mt-5 ">
          Karena kami memiliki beberapa keunggulan dalam menyajikan
        </p>
        <p className="font-medium text-slate-500 text-center text-md ">
          maupun mengelola data yang telah kami dapatkan untuk penilaian
        </p>
        <p className="font-medium text-slate-500 text-center text-md ">
          perusahaan tersebut
        </p>
      </div>
      <div className="hidden lg:block">
        <img
          src={bgAbout}
          className="absolute w-1/4 h-auto top-3/4 left-[58%]"
          alt="bg-about"
        />
      </div>
      <div className="p-5 lg:flex lg:justify-around">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
          {/* icon 1 */}
          <div className="bg-transparent shadow-lg w-80 h-72 py-10 col-span-1 mx-auto">
            <div className="bg-green-100 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconGear}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Metode Penilaian
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Metode penilaian dilakukan dari{' '}
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                berbagai sudut pandang untuk
              </p>
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                mendapatkan hasil yang komprehensif
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-5">
              Learn more
            </p>
          </div>
          {/* icon 2 */}
          <div className="bg-transparent w-80 h-72 py-10 mx-auto">
            <div className="bg-orange-300 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconDokumen}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Laporan Penilaian
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Laporan penilaian dibuat secara{' '}
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                profesional, sangat terperinci dan
              </p>
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                mudah untuk di download
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-5">
              Learn more
            </p>
          </div>
          {/* icon 3 */}
          <div className="bg-transparent w-80 h-72 py-10 mx-auto">
            <div className="bg-gray-300 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconShield}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Kerahasiaan Data
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Data yang telah kami dapatkan{' '}
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                dijamin kereahasiannya tidak akan
              </p>
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                kami menjual atau membagikannya
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-5">
              Learn more
            </p>
          </div>
          {/* icon 4 */}
          <div className="bg-transparent w-80 h-72 py-10 mx-auto">
            <div className="bg-gray-300 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconPanah}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Keakuratan Data
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Sumber data disesuaikan{' '}
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                berdasarkan negara dan industrinya
              </p>
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                {' '}
                untuk mendapatkan keakuratan
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-5">
              Learn more
            </p>
          </div>
          {/* icon 5 */}
          <div className="bg-transparent w-80 h-72 py-10 mx-auto">
            <div className="bg-rose-100 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconPen}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Penyesuaian Parameter Penilaian
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Dapat menyesuaikan Parameter
              <p className="text-center text-sm font-bold text-slate-400 tracking-tight">
                {' '}
                Penilaian untuk mempermudah anda
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-10">
              Learn more
            </p>
          </div>
          {/* icon 6 */}
          <div className="bg-transparent w-80 h-72 py-10 mx-auto">
            <div className="bg-gray-100 rounded-md w-10 h-10 mx-auto py-1">
              <img
                src={iconDollar}
                alt="icon"
                className="w-5 h-5 mx-auto mt-1.5"
              />
            </div>
            <h1 className="text-md font-bold text-black mt-5">
              Membantu Proyeksi Keuangan
            </h1>
            <p className="text-center text-sm font-bold text-slate-400 mt-7 tracking-tight">
              Kami menyediakan default{' '}
              <p className="text-center text-sm font-bold text-slate-400tracking-tight">
                berdasarkan kinerja rata-rata
              </p>
              <p className="text-center text-sm font-bold text-slate-400tracking-tight">
                perusahaan di industri yang sama
              </p>
            </p>
            <p className="text-center text-sm font-bold text-blue-400 tracking-tight mt-5">
              Learn more
            </p>
          </div>
        </div>
      </div>
      {/* end section about 1 */}

      {/* section about 2 */}
      <div className="hidden lg:block">
        <img
          src={bgAbout3}
          className="absolute w-1/4 h-auto top-[170%]"
          alt="bg-about"
        />
      </div>
      <div className="flex">
        <img
          src={bgAbout2}
          alt="about"
          className="hidden md:block mx-auto w-1/3 h-1/2"
        />

        <div className="flex flex-col mx-auto mt-10">
          <h1 className="font-bold text-center md:text-left text-black text-3xl">
            Platform Sangat Mudah
          </h1>
          <h1 className="font-bold text-center md:text-left text-black text-3xl">
            Untuk Digunakan
          </h1>
          <p className="font-medium text-center md:text-left text-sm md:text-lg text-slate-400 mt-7">
            Finmod merupakan satu - satunya platform penilaian online menyeluruh
          </p>
          <p className="font-medium text-center md:text-left text-sm md:text-lg text-slate-400">
            untuk startup yang ada di Indonesia dengan metode penilaian yang
          </p>
          <p className="font-medium text-center md:text-left text-sm md:text-lg text-slate-400">
            dilakukan dari berbagai sudut pandang jika diperlukan, Anda dapat
          </p>
          <p className="font-medium text-center md:text-left text-sm md:text-lg text-slate-400">
            memutuskan untuk menggunakan subset dari 5 metode yang
          </p>
          <p className="font-medium text-center md:text-left text-sm md:text-lg text-slate-400">
            tersedia untuk mendapatkan hasil yang komprehensif
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-10 w-1/2 mx-auto md:mx-0">
            Beli Sekarang
          </button>
        </div>
      </div>
      {/* end section about 2 */}

      {/* section about 3 */}
      <div className="flex ">
        <div className="flex flex-col mx-auto mt-20 md:mt-36 lg:mt-40">
          <h1 className="font-bold text-center md:text-left text-black text-3xl">
            Kami Dipercaya banyak
          </h1>
          <h1 className="font-bold text-center md:text-left text-black text-3xl">
            Startup & UMKM Indonesia
          </h1>
          <p className="font-medium text-center md:text-left text-sm lg:text-lg text-slate-400 mt-7">
            Sudah banyak startup Indonesia yang mempercayai kami sebagai
          </p>
          <p className="font-medium text-center md:text-left text-sm lg:text-lg text-slate-400">
            platform penilaian online untuk perusahaan mereka. Sekarang giliran
          </p>
          <p className="font-medium text-center md:text-left text-sm lg:text-lg text-slate-400">
            anda untuk mengetahui seberapa berharganya perusahaan anda
          </p>

          <div className="flex justify-around md:justify-start mt-7">
            <div className="flex flex-col md:mr-10">
              <h1 className="text-blue-500 font-extrabold text-xl">130k+</h1>
              <p className="text-slate-500 font-medium text-sm">Perusahaan</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-500 font-extrabold text-xl">100k+</h1>
              <p className="text-slate-500 font-medium text-sm">Indonesia</p>
            </div>
          </div>
        </div>
        <img
          src={startUp}
          alt="about"
          className="hidden md:block md:mt-20 w-1/3 h-1/2 mx-auto"
        />
      </div>
      {/* end section about 3 */}

      {/* section about 4 */}
      <div className="flex justify-center items-center mt-24">
        <div className="bg-gray-300 shadow-lg w-full h-80 md:h-96 py-10 col-span-1 mx-auto">
          <div className="flex flex-col mx-auto py-4 md:py-7">
            <h1 className="font-extrabold text-center  text-black text-2xl">
              Di Berbagai Negara Sudah
            </h1>
            <h1 className="font-extrabold text-center  text-black text-2xl">
              Menggunakan Finmod
            </h1>
            <p className="text-sm text-slate-600 text-center mt-5 font-normal">
              Tidak hanya di Indonesia tapi beberapa perusahaan di negara lain
            </p>
            <p className="text-sm text-slate-600 text-center font-normal">
              menggunakan findmod untuk mempelajari, memantau, dan
            </p>
            <p className="text-sm text-slate-600 text-center font-normal">
              mengembangkan penilaian perusahaan mereka
            </p>
          </div>
          <div className="flex justify-around py-7">
            <div className="flex flex-col">
              <h1 className="text-left font-extrabold text-2xl text-slate-700">
                125.500
              </h1>
              <p className="text-left font-normal text-xs text-slate-700">
                Asia
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-left font-extrabold text-2xl text-slate-700">
                500
              </h1>
              <p className="text-left font-normal text-xs text-slate-700">
                Eropa
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-left font-extrabold text-2xl text-slate-700">
                500
              </h1>
              <p className="text-left font-normal text-xs text-slate-700">
                Amerika
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-left font-extrabold text-2xl text-slate-700">
                3.550
              </h1>
              <p className="text-left font-normal text-xs text-slate-700">
                Oceania
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end section about 4 */}

      {/* section about 5 */}
      <img
        src={imgCentang}
        alt="about"
        className="hidden md:block md:absolute md:ml-11 lg:ml-16 xl:ml-28 md:mt-10 md:w-1/6 md:h-1/12"
      />
      <div className="flex justify-center items-center mt-16">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-2xl">Apa Kata Client</h1>
          <p className="font-light text-sm text-slate-500 mt-3">
            Kami mendengarkan masukan dan apresiasi dan client kami di seluruh
          </p>
          <p className="font-light text-sm text-slate-500">
            dunia yang telah percaya terhadap kami
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-around items-center mt-10">
        <div className="flex flex-col">
          <p className="italic text-center md:text-left font-medium text-md text-slate-500">
            Finmod sangat membantu kamu untuk
          </p>
          <p className="italic text-center md:text-left font-medium text-md text-slate-500">
            menyiapkan laporan Financial Model secara
          </p>
          <p className="italic text-center md:text-left font-medium text-md text-slate-500">
            mudah dan lengkap yang dibutuhkan untuk
          </p>
          <p className="italic text-center md:text-left font-medium text-md text-slate-500">
            fase Fundraising kami kepada para calon
          </p>
          <p className="italic text-center md:text-left font-medium text-md text-slate-500">
            investor di perusahaan kami.
          </p>
          <h1 className="font-bold text-lg mt-3 md:text-left">Ardiansyah</h1>
          <p className="text-slate-500 font-light text-xs md:text-left">
            CEO, Tanimore
          </p>
        </div>
        <img
          src={imgPeople}
          alt="people"
          className="hidden md:block w-1/3 h-1/2 md:w-1/4 md:h-1/3"
        />
      </div>
      {/* end section about 5 */}
    </div>
  );
}

export default About;
