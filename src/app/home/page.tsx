import React from 'react';
import Image from 'next/image';
import { applications } from '@/utils/apps'
import MainHome from '@/components/MainHome';
import GoogleNews from '@/components/GoogleNews';

function HomePage() {




  return (
    <div className='flex'>
      {/* <div className=''>
        google news
      </div> */}
      {/* <GoogleNews/> */}

      <MainHome />

      {/* other apps */}
      {/* <div>
        other apps
      </div> */}
    </div>
  )
}

export default HomePage