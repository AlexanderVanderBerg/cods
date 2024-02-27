import React from 'react'
import MembershipCard from './PricingMembership/MembershipCard'
import MembershipCardPro from './PricingMembership/MembershipCardPro'

export default function PricingMembership() {
  return (
    <div>
      <div className='w-full h-[957px] mb-20'>
        <div className='text-[#2E3192] text-lg text-center'>CODS ISLAND</div>
        <div className='flex flex-row items-center justify-center mt-6'>
          <div className='text-[#333] text-7xl'>
              Our
          </div>
          <div className='text-[#2E3192] text-7xl'>
              &nbsp;Pricing & Membership
          </div>
        </div>
        <div className='mt-20 flex flex-row justify-center'>
          MONTHLY / YEARLY
        </div>
        <div className='mx-20 flex flex-row'>
          <div className='mt-28 basis-1/4'>
            <MembershipCard price="2" period="month" type="Intro"></MembershipCard>
          </div>
          <div className='mt-28 basis-1/4'>
            <MembershipCard price="5" period="month" type="Base"></MembershipCard>
          </div>
          <div className='mt-14 basis-1/4'>
            <MembershipCardPro price="100" period="month" type="Pro" popular="true"></MembershipCardPro>
          </div>
          <div className='mt-28 basis-1/4'>
            <MembershipCard price="20" period="month" type="Enterprise"></MembershipCard>
          </div>
        </div>
      </div>
    </div>
  )
}
