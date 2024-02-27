import React from 'react'
import Quote from '../../static/image/Quote.png'

export default function QuoteCard(props) {
  return (
    <div>
      <div className='bg-[#F5F5F5] border rounded-3xl px-12'>
        <div className='relative z-10 mt-[-8px]'>
          <img src={Quote} alt="Quote" className=''/>
        </div>
        <div className='mt-8'>
          {props.description}
        </div>
        <div className='mt-5 flex flex-row'>
          <div className='mr-6 border rounded-2xl bg-[#D8D8D8] w-20 h-20'></div>
          <div className='flex flex-col justify-center'>
            <div className='text-2xl font-bold'>{props.name}</div>
            <div className='text-base opacity-50'>{props.seminame}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
