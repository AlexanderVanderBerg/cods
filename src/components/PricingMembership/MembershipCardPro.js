import React from 'react'
import checkcircle from '../../static/image/checkcircle.png'

export default function MembershipCard(props) {
  return (
    <div>
      <div className='bg-[#5243C2] border rounded-3xl px-12 procardshadow'>
        {props.popular && 
          <div className='flex flex-row justify-end'>
            <div className='mt-6 w-[133px] mr-6 flex flex-row justify-end relative z-10 border rounded-xl bg-white text-xs px-4 py-2 font-[Inter] font-bold'>MOST POPULAR</div>
          </div>
        }
        <div className={`mt-${props.popular === 'true' ? 1 : 12} flex flex-row`}>
          <div className='text-4xl font-[Inter] font-bold'>${props.price}</div>
          <div className='text-lg opacity-50 flex flex-row items-center ml-6'>/{props.period}</div>
        </div>
        <div className='mt-20 text-3xl font-[Inter] font-bold'>
          {props.type}
        </div>
        <div className='mt-4'>
          <div className='font-[Inter] text-base opacity-50'>For most businesses that want to</div>
          <div className='font-[Inter] text-base opacity-50'>otpimize web queries</div>
        </div>
        <div className='mt-8 flex flex-col space-y-4'>
          <div className='flex flex-row space-x-4'>
            <img src={checkcircle} alt="checkcircle"/>
            <div className='font-[Inter] text-base opacity-50'>All limited links</div>
          </div>
          <div className='flex flex-row space-x-4'>
            <img src={checkcircle} alt="checkcircle"/>
            <div className='font-[Inter] text-base opacity-50'>Own analytics platform</div>
          </div>
          <div className='flex flex-row space-x-4'>
            <img src={checkcircle} alt="checkcircle"/>
            <div className='font-[Inter] text-base opacity-50'>Chat support</div>
          </div>
          <div className='flex flex-row space-x-4'>
            <img src={checkcircle} alt="checkcircle"/>
            <div className='font-[Inter] text-base opacity-50'>Optimize hashtags</div>
          </div>
          <div className='flex flex-row space-x-4'>
            <img src={checkcircle} alt="checkcircle"/>
            <div className='font-[Inter] text-base opacity-50'>Unlimited users</div>
          </div>
        </div>
        <div className='mt-8 mb-12 border rounded-3xl bg-[#DFDFDF] w-[228px] text-center py-4 px-16'>
          Choose plan
        </div>
      </div>
    </div>
  )
}
