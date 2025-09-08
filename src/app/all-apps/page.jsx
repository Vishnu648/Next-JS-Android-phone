"use client"
import { useEffect, useState } from 'react'
import { applications } from '@/utils/apps';
import Image from 'next/image';
import AppSearch from '@/components/AppSearch'

function page() {

    const [searchText, setSearchText] = useState("");
    const [searchArray, setSearchArray] = useState(applications);

    let search = (x) => {
        let search = x.toUpperCase();
        setSearchText(search)
        let y = applications.filter((data) => data.appName.toUpperCase().startsWith(search.toUpperCase()));
        setSearchArray(y)
    }

    return (
        <div className='flex flex-col'>

            <div className='flex justify-between border w-[90%] px-3 m-auto rounded-full bg-[#363a3c] mt-8'>
                <Image src="/icons/search.png" alt='google' height={50} width={50} className='my-5'/>
                <AppSearch search={search} />
                <div className='flex gap-5'>
                    <Image src="/icons/menu.png" alt='google' height={50} width={50} className='my-5'/>
                </div>
            </div>

            <div className='w-full flex-[.5] grid grid-cols-5 py-8 border-b-1' style={{ display: searchText?.length > 0 && "none" }}>
                {
                    applications.map((apps, index) => {
                        if (index > 16 && index < 22)
                            return (
                                <div key={apps.appName} className='flex flex-col items-center gap-2'>
                                    <Image src={apps.icon} alt={apps.appName} height={130} width={130} className='rounded-2xl' />
                                    <p className='text-2xl'>{apps?.appName}</p>
                                </div>
                            )
                    })
                }
            </div>

            <div className='w-full flex-1 grid grid-cols-5  p-10 gap-20'>
                {
                    searchArray.map((apps, index) => {

                        return (
                            <div key={apps.appName} className='flex flex-col items-center gap-2'>
                                <Image src={apps.icon} alt={apps.appName} height={130} width={130} className='rounded-2xl' />
                                <p className='text-2xl whitespace-nowrap'>{apps?.appName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page