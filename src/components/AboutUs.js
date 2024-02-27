import React from 'react'
import frontvideo from '../static/image/frontvideo.png'
import backvideo from '../static/image/backvideo.png'
import threebuttons from '../static/image/threebuttons.png'
import threebluebuttons from '../static/image/threebluebuttons.png'
import QuoteCard from './AboutUs/QuoteCard'

export default function AboutUs() {
  return (
    <div>
      <div className='relative top-[297px] z-20'>
        <div className='z-20'>
          <div className='bg-black flex flex-row space-x-6 mr-[-372px]'>
            <div className='ml-[-372px]'>
              <QuoteCard name="Stephanie Bailey" seminame="Ashtanga Yog" description='"Which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."'></QuoteCard>
            </div>
            <div>
              <QuoteCard name="Elsi Hansdottir" seminame="Meditation" description='"It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."'></QuoteCard>
            </div>
            <div>
              <QuoteCard name="Stephanie Bailey" seminame="Ashtanga Yog" description='"Which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."'></QuoteCard>
            </div>
            <div>
              <QuoteCard name="Stephanie Bailey" seminame="Ashtanga Yog" description='"Which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."'></QuoteCard>
            </div>
          </div>
        </div>
      </div>
      
      <div className='w-full h-[1554px] pt-36 px-32 mt-[-297px]'>
        <div className='text-[#2E3192] text-lg text-center'>TESTIMONIALS</div>
        
        <div className='flex flex-row items-center justify-center mt-5'>
          <div className='text-[#333] text-7xl'>
              What Our Clients
              <div className='flex flex-row items-center justify-center'>
                Say
                <div className='text-[#2E3192] text-7xl'>
                    &nbsp;About Us
                </div>
              </div>
          </div>
        </div>
        <div className='mt-[432px] flex flex-row justify-center'>
            <img src={threebuttons} alt="threebuttons"/>
        </div>
        <div className='mt-8'>
          <div className='flex flex-row justify-center'>
            <div className='absolute z-10 '>
            <img src={frontvideo} alt="frontvideo" className='border rounded-3xl'/>
            </div>
            
          </div>
          <div className='opacity-50 flex flex-row justify-center items-center h-[578px]'>
            <img src={backvideo} alt="backvideo" className='h-[268px] border rounded-3xl'/>
          </div>
        </div>
        <div className='mt-9 flex flex-row justify-center'>
            <img src={threebluebuttons} alt="threebluebuttons"/>
        </div>
      </div>
    </div>
  )
}
