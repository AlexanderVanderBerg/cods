import React from 'react'
import Rating from 'react-rating-stars-component';
import cart from '../../static/image/cart.png';

export default function ProductCard(props) {
  return (
    <div>
      <div className='w-[422px] h-[342px] bg-[#F8F8F8]'>
        <div className='text-[#2E3192] text-3xl font-[Open Sans] pt-32 ml-12'>
            {props.title}
        </div>
        <div className='text-base text-[#333333] mt-3 ml-12'>
            <div className='opacity-50 inline'>{props.description}</div>
            <div className='inline font-[Kumbh Sans] opacity-100 text-[#333]'>&nbsp;Read More</div>
        </div>
        <div className='mt-2 ml-12'>
            <Rating
                count={5}
                value={5}
                size={24}
                activeColor="#ffd700"
                edit={false} // Set to true if you want to enable user interaction
            />
        </div>
        <div className='mt-6 ml-12 mr-16 flex flex-row justify-between'>
            <div className='text-5xl text-[#2E3192]'>
                $25
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center'>
                        <img src={cart} alt="cart" className='w-[21px] h-[21px]'/>
                    </div>
                    <div className='font-[Kumbh Sans] text-base ml-2'>Add to Cart</div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M7.85765 14.5957L7.83815 14.5763L7.81751 14.5582C5.57619 12.5873 3.96045 11.1324 2.80171 9.73036L2.80152 9.73013C1.44736 8.09274 0.9 6.71282 0.9 5.34369C0.9 2.8496 2.85335 0.9 5.37645 0.9C6.4737 0.9 7.57049 1.30069 8.43055 2.00342L8.9999 2.46863L9.56933 2.00352C10.4298 1.30066 11.5267 0.9 12.6236 0.9C15.1467 0.9 17.1 2.8496 17.1 5.34369C17.1 6.71273 16.5527 8.09253 15.1974 9.72938L15.1971 9.72981C14.0375 11.132 12.4223 12.5868 10.181 14.5579L10.1602 14.5761L10.1406 14.5957L8.99969 15.7308L7.85765 14.5957Z" stroke="black" stroke-width="1.8"/>
                        </svg>
                    </div>
                    <div className='font-[Kumbh Sans] text-base ml-2'>Save</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
