import React from 'react'
import cods_black_logo from '../static/image/CoDS_Black_Logo.png';
import airbuds from '../static/image/airbuds.png';
import bioprotein from '../static/image/bioprotein.png';
import grander from '../static/image/grander.png';
import ProductCard from './FeaturedProducts/ProductCard';

export default function FeaturedProducts() {
  return (
    <div>
        <div className='mt-12 flex flex-col justify-center items-center pt-12'>
            <img src={cods_black_logo} alt="cods_black_logo" className='w-[149px] h-[84px]'/>
            <div className='mt-3 text-[#2E3192]'>OUR LATEST</div>
        </div>
        <div className='flex flex-row items-center justify-center mt-4'>
            <div className='text-[#333] text-7xl'>
                Featured
            </div>
            <div className='text-[#2E3192] text-7xl'>
                &nbsp;Products
            </div>
        </div>
        {/* start of feature products */}
        <div className='mt-14 mx-56 flex flex-row justify-between'>
            <div>
                <img src={airbuds} alt="airbuds" className='w-[325px] h-[284px] ml-8'/>
                <div className='relative mt-[-80px] -z-10'>
                    <ProductCard title="Air Buds" description="Air Buds are designed to replace electronic ear buds."></ProductCard>
                </div>
            </div>
            <div>
                <img src={bioprotein} alt="bioprotein" className='w-[297px] h-[251px] mt-8'/>
                <div className='relative mt-[-80px] -z-10'>
                    <ProductCard title="BioProtein-Plus" description="Air Buds are designed to replace electronic ear buds."></ProductCard>
                </div>
            </div>
            <div>
                <img src={grander} alt="grander" className='w-[219px] h-[292px]'/>
                <div className='relative mt-[-88px] -z-10'>
                    <ProductCard title="Grander Penergizer" description="Air Buds are designed to replace electronic ear buds."></ProductCard>
                </div>
            </div>
        </div>
        {/* end of feature products */}
        <div className='flex flex-row justify-center bg-black my-16'>
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="28" viewBox="0 0 84 28" fill="none">
                <circle cx="13.5484" cy="13.5484" r="13.0484" stroke="white"/>
                <circle cx="13.5484" cy="13.5483" r="6.95161" fill="white" stroke="white"/>
                <circle cx="48.0968" cy="13.5483" r="6.95161" stroke="white" stroke-opacity="0.5"/>
                <circle cx="76.5484" cy="13.5483" r="6.95161" stroke="white" stroke-opacity="0.5"/>
            </svg>
        </div>
    </div>
  )
}
