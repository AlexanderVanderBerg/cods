import React from 'react'
import yellowdean from '../static/image/yellowdean.png'
import CoDS_Black_Logo_XL from '../static/image/CoDS_Black_Logo_XL.png'

export default function OurStory() {
  return (
    <div>
        <div className='pt-36 pb-20 px-32 bg-[#F8F8F8] flex flex-row justify-between'>
            <div>
                <img src={yellowdean} alt="yellowdean"/>
                <div className='relative z-10 mt-[-139px] ml-[137px]'>
                    <img src={CoDS_Black_Logo_XL} alt="CoDS_Black_Logo_XL"/>
                </div>
            </div>
            <div>
                <div className='flex flex-row items-center justify-start'>
                    <div className='text-[#333] text-7xl'>
                        Our
                    </div>
                    <div className='text-[#2E3192] text-7xl'>
                        &nbsp;Story
                    </div>
                </div>
                <div className='mt-16 overflow-y-auto overflow-x-hidden h-[542px]'>
                    <div className='text-4xl font-[Inter]'>Our Journey</div>
                    <div className='mt-7 w-[520px] text-xl'>
                        Our Church is, first and foremost, a healing organization. We have been a private membership association since 2001. We believe in healing rather than to simply offer treatments. We hope that we will raise enough money o that some day we can have We do not believe that medicine should be practiced as a form of commerce. The healing services of the Church Of Divine Structure are delivered all over the world by our sanctified ministers and deacons. The main two healers, Rev Dr Howell and Rev Rebecca, come back for rest and recovery to the CoDS’ headquarters in the Okanogan highlands in north-central Washington.
                        Our Church is, first and foremost, a healing organization. We have been a private membership association since 2001. We believe in healing rather than to simply offer treatments. We hope that we will raise enough money o that some day we can have We do not believe that medicine should be practiced as a form of commerce. The healing services of the Church Of Divine Structure are delivered all over the world by our sanctified ministers and deacons. The main two healers, Rev Dr Howell and Rev Rebecca, come back for rest and recovery to the CoDS’ headquarters in the Okanogan highlands in north-central Washington.
                    </div>
                </div>
                <div className='mt-3 py-4 px-14 bg-[#2E3192] border rounded-xl w-[170px] flex items-center justify-center text-white'>
                    EXPLORE
                </div>
            </div>
        </div>
    </div>
  )
}
