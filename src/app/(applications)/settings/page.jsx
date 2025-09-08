import React from 'react';
import Image from 'next/image';
import { allSettings } from "@/utils/settingsOptions"

function Settings() {
    return (
        <div className='flex flex-col pt-[14em] px-9'>
            <h2 className='text-8xl font-extrabold flex self-start'>Settings</h2>
            <div className='flex justify-between border w-[90%] px-3 rounded-full bg-[#363a3c] mt-8'>
                <Image src="/icons/search.png" alt='google' height={50} width={50} className='my-5' />
                <input type="text" placeholder='Search settings' className='w-full ml-2 outline-none ' />
            </div>
            <div className='flex flex-col gap-10 my-9'>
                {
                    allSettings?.map((data, index) => {
                        const subLength= data?.sub?.length;
                        if (data?.name != "br") {
                            return (
                                <div key={index} className='flex gap-4'>
                                    <Image src="/icons/weather.png" alt="logo" height={40} width={40} />
                                    <div>
                                        <h3 className='font-semibold text-xl'>{data?.name}</h3>
                                        <div className='flex gap-1'>
                                            {data.sub && data.sub.map((sh, i) => {
                                                return (
                                                    <p key={i}>{sh}{i<subLength-1 && " , "}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return(
                                <hr/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Settings