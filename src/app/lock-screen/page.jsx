"use client"
import Image from 'next/image';
import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function LockScreen() {

    const router = useRouter();
    const scrollContainerRef = useRef(null);
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const date = new Date().getUTCDay();
    // console.log(`🚀 ~ date:-`,dd)

    const lockScreenDetails = [
        { name: "temp", value: "25" },
        { name: "humidity", value: "88" },
        { name: "air", value: "31" },
        { name: "uv", value: "--" },
    ];

    const [scrollPosition, setScrollPosition] = useState()
    const [scrollThreshold, setScrollThreshold] = useState()

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        console.log(`🚀 ~ container:-`, container)
        if (container) {
            const scrollPosition = container.scrollTop + container.clientHeight;
            const scrollThreshold = container.scrollHeight;
            console.log(`🚀 sp st:-`, scrollPosition, scrollThreshold)

            setScrollPosition(scrollPosition)
            setScrollThreshold(scrollThreshold)


        }
    };

    const handleUnlock = () => {
        router.push('/home')
    }

    return (
        <div className='h-screen flex flex-col items-center relative'>
            <div className='flex flex-col items-center'>
                <p className='font-extrabold text-[14em]'>{`${hour.toString()?.length == 1 ? "0" + hour : hour} : ${minute.toString()?.length == 1 ? "0" + minute : minute}`}</p>
                <p className='text-4xl'>Fri, 29 Aug
                    <Image src="/icons/weather.png" width={48} height={48} alt="weather" className='inline mx-2' />
                    26°
                </p>

                <div className='flex gap-10 mt-20'>
                    {
                        lockScreenDetails.map((data) => {
                            return (
                                <div className='border-8 border-amber-50 flex rounded-full p-8 text-3xl' key={data?.name}>
                                    {data?.value}
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className='border h-[500px] w-[500px] overflow-scroll' ref={scrollContainerRef} onScroll={handleScroll}>
                    <div className='border border-amber-200 h-[1000px] w-[300px] overflow-y-auto'>

                    </div>
                </div> */}

                <div className='absolute bottom-52 text-5xl' onClick={handleUnlock}>
                    click to unclock
                </div>

            </div>
        </div>
    )
}

export default LockScreen