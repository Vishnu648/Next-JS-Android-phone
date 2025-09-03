import React from 'react'
import Image from 'next/image'
function GoogleNews() {

    const carts = [
        { name: "Thiruvananthapuram", value: "30°" },
        { name: "Air quality - 53", value: "Satisfactory" },
        { name: "Sunset Today", value: "6:13 PM" },
        { name: "Settings", value: "Customise your space" },
    ];

    const news = [
        { channelName: "stthomascollegeflaw.co.in", img: "/images/news/1.jpg", title: "Bajaj pulsar 124: Sporty Looks, Smart Tech & 50kmpl Milage", postDay: "3d" },
        {
            channelName: "techbytechannel.org",
            img: "/images/news/1.jpg",
            title: "iPhone 15 Pro Max Review: Power Meets Elegance",
            postDay: "1d"
        },
        {
            channelName: "autonxtdaily.in",
            img: "/images/news/1.jpg",
            title: "Top 5 Electric Scooters to Buy in 2025",
            postDay: "5h"
        },
        {
            channelName: "futuregadgettalk.com",
            img: "/images/news/1.jpg",
            title: "Samsung Galaxy Z Flip 6: Bigger Battery, Smarter Features",
            postDay: "2d"
        },
        {
            channelName: "dailytechdigest.net",
            img: "/images/news/1.jpg",
            title: "Nothing Phone 3 Leaks Reveal Transparent Power Again",
            postDay: "4d"
        },
        {
            channelName: "drivepulsemedia.co",
            img: "/images/news/1.jpg",
            title: "KTM Duke 250 2025 Model Spotted Testing on Road",
            postDay: "6h"
        },
        {
            channelName: "gadgetsnapshots.org",
            img: "/images/news/1.jpg",
            title: "Google Pixel Watch 2: Smarter, Sleeker & More Durable",
            postDay: "1w"
        }
    ]

    return (
        <div className='flex flex-col w-full pt-8'>
            <div className='flex justify-between px-5 items-center'>
                <div className='flex justify-between border p-8 w-[90%] rounded-full bg-[#363a3c]'>
                    <Image src="/icons/googleSearch.png" alt='google' height={50} width={50} />
                    <Image src="/icons/googleMic.png" alt='google' height={50} width={50} />
                </div>
                <Image src="/icons/user.png" alt='user' height={48} width={48} className='h-18 w-18' />
            </div>

            <div className='flex gap-5 justify-around m-8 overflow-y-auto'>
                {
                    carts.map((data) => {
                        return (
                            <div key={data?.name} className='border rounded-3xl flex flex-col p-5 text-3xl gap-10 justify-between'>
                                <p className={`whitespace-nowrap ${data?.name == "Settings" && "text-blue-300"}`}>{data?.name}</p>
                                <p className={`${data?.name == "Settings" ? "text-2xl" : "text-4xl"} whitespace-nowrap`}>{data?.value}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                {
                    news.map((data) => {
                        return (
                            <div key={data?.title} className='flex flex-col mb-10 bg-[#101217]'>
                                <div className='flex items-center p-3 gap-4'>
                                    <Image src={data?.img} alt={data?.channelName}
                                        height={60}
                                        width={60}
                                        className='w-12 h-12 rounded-full'
                                    />
                                    <p className='text-2xl'>{data?.channelName}</p>
                                </div>
                                <Image src={data?.img} alt={data?.channelName}
                                    height={500}
                                    width={100}
                                    className='w-full'
                                />
                                <p className='font-semibold text-3xl p-5'>{data?.title}</p>
                                <p className='p-5'>{data?.postDay}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GoogleNews