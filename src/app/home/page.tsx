import React from 'react';
import Image from 'next/image';
import { applications } from '@/utils/apps'

function HomePage() {

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  const lockScreenDetails = [
    { name: "temp", value: "25" },
    { name: "humidity", value: "88" },
  ];


  return (
    <div className='flex flex-col h-screen justify-between pt-[100px]'>
      <div className='flex items-center w-full justify-center gap-[8em] mt-10'>
        <div className='font-extrabold text-[8em] flex flex-col'>
          <span>{hour.toString()?.length == 1 ? "0" + hour : hour}</span>
          <span>{minute.toString()?.length == 1 ? "0" + minute : minute}</span>
        </div>

        <div>
          <div className='border rounded-full bg-[#14181c] flex flex-col justify-center items-center px-14 py-8'>
            <div className='flex'>
              <Image src="/icons/weather.png" width={48} height={48} alt="weather" className='inline mx-2' />
              <p className='text-5xl font-semibold'>26°</p>
            </div>
            <p className='text-4xl'>Fri, 29 Aug</p>
          </div>

          <div className='flex gap-10 mt-20'>
            {
              lockScreenDetails.map((data) => {
                return (
                  <div className='border-8 border-amber-50 flex rounded-full p-8 text-3xl' style={{ borderColor: data?.name == "temp" ? "#5fa6e7" : "green" }} key={data?.name}>
                    {data?.value}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='flex justify-between border p-5 w-[85%] m-auto rounded-full bg-[#363a3c]'>
        <Image src="/icons/googleSearch.png" alt='google' height={50} width={50} />
        <div className='flex gap-5'>
          <Image src="/icons/googleMic.png" alt='google' height={50} width={50} />
          <Image src="/icons/googleLens.png" alt='google' height={50} width={50} />
        </div>
      </div>

      <div className='w-full flex-[.5] grid grid-cols-5'>
        {
          applications.map((apps,index) => {

            if(index<5)
            return (
              <Image key={apps.appName} src={apps.icon} alt={apps.appName} height={100} width={100} className='rounded-2xl'/>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage