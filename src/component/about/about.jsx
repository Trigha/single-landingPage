import React from 'react';
import iconGear from '../../img/Methode.png';
import iconDokumen from '../../img/Paper.png';
import iconShield from '../../img/Shield.png';
import iconPanah from '../../img/Vector.png';
import iconPen from '../../img/Edit.png';
import iconDollar from '../../img/Dollar.png';

function About() {
  return (
    <div className="pt-[50rem]">
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
    </div>
  );
}

export default About;
