import React from 'react'
import smallblackcheck from '../static/image/smallblackcheck.png'
import ringphone from '../static/image/ringphone.png'
import ContactEmail from '../static/image/ContactEmail.png'
import ContactMark from '../static/image/ContactMark.png'
import ContactTwitter from '../static/image/ContactTwitter.png'
import ContactInstagram from '../static/image/ContactInstagram.png'
import ContactDiscord from '../static/image/ContactDiscord.png'

export default function ContactUs() {
  return (
    <div>
      <div className='w-full h-[1133px] bg-[#F8F8F8] pt-36 px-32'>
        <div className='text-[#2E3192] text-lg text-center'>CODS ISLAND</div>
        <div className='flex flex-row items-center justify-center mt-5'>
          <div className='text-[#333] text-7xl'>
              Contact
          </div>
          <div className='text-[#2E3192] text-7xl'>
              &nbsp;Us
          </div>
        </div>
        <div className='mt-16 flex flex-row justify-between bg-white'>
          {/* start of left side of contact us */}
          <div className='bg-[#1D1D1E] w-[491px] h-[647px] px-12 border rounded-md m-3'>
            <div className='mt-12 text-white text-3xl'>
              Contact Information
            </div>
            <div className='mt-3 text-white text-lg opacity-50'>
              Say something to start a live chat!
            </div>
            <div className='mt-32 flex flex-col space-y-12'>
              <div className='flex flex-row'>
                <div className='mr-6'>
                  <img src={ringphone} alt="ringphone" className=''/>
                </div>
                <div className='text-lg text-white'>
                  +1012 3456 78
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='mr-6'>
                  <img src={ContactEmail} alt="ContactEmail" className=''/>
                </div>
                <div className='text-lg text-white'>
                  demo@gmail.com
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='mr-6'>
                  <img src={ContactMark} alt="ContactMark" className=''/>
                </div>
                <div className='text-lg text-white'>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </div>
              </div>
            </div>
            <div className='mt-32 flex flex-row space-x-6'>
                <div>
                  <img src={ContactTwitter} alt="ContactTwitter" className=''/>
                </div>
                <div>
                  <img src={ContactInstagram} alt="ContactInstagram" className=''/>
                </div>
                <div>
                  <img src={ContactDiscord} alt="ContactDiscord" className=''/>
                </div>
            </div>
          </div>
          {/* end of left side of contact us */}
          {/* start of right side of contact us */}
          <div className='w-[767px] h-[647px] pt-16 flex flex-col space-y-12 pr-12'>
            <div className='flex flex-row space-x-12 justify-between'>
              <div className='flex flex-col space-y-3 basis-1/2'>
                <div>
                  <div>FirstName</div>
                </div>
                <div>
                  <input type='text' placeholder=''></input>
                </div>
              </div>
              <div className='flex flex-col space-y-3 basis-1/2'>
                <div>
                  <div>LastName</div>
                </div>
                <div>
                  <input type='text' placeholder='Doe'></input>
                </div>
              </div>
            </div>
            <div className='flex flex-row space-x-12 justify-between'>
              <div className='flex flex-col space-y-3 basis-1/2'>
                <div>
                  <div>Email</div>
                </div>
                <div>
                  <input type='text' placeholder=''></input>
                </div>
              </div>
              <div className='flex flex-col space-y-3 basis-1/2'>
                <div>
                  <div>Phone Number</div>
                </div>
                <div>
                  <input type='text' placeholder='' value='+1 012 3456 789'></input>
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-3'>
              <div>
                <div>Select Subject?</div>
              </div>
              <div className='flex flex-row space-x-1'>
                <div className='flex flex-row space-x-1'>
                  <img src={smallblackcheck} alt="smallblackcheck" className='m-1'/>
                  <div>General Inquiry</div>
                </div>
                <div className='flex flex-row space-x-1'>
                  <img src={smallblackcheck} alt="smallblackcheck" className='m-1'/>
                  <div>General Inquiry</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-3'>
              <div>
                <div>Message</div>
              </div>
              <div>
                <input type='text' placeholder='Write your message...' className='w-full'></input>
              </div>
            </div>
            <div className='justify-end items-end flex flex-row'>
              <div className='bg-[#2E3192] w-[304px] h-[52px] text-base font-bold text-white py-4 px-12 flex flex-row justify-center items-center border rounded-md'>
                <div>
                  Send Message
                </div>
              </div>
            </div>
          </div>
          {/* end of right side of contact us */}
        </div>
      </div>
    </div>
  )
}
