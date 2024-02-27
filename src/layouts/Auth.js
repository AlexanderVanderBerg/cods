import React from 'react';
import {Outlet} from 'react-router-dom'
import AuthSideImag from '../static/image/auth-side-bg.jpg'
import AuthLogo from '../static/image/auth-logo.png'
const AuthLayout=props=>{
  return (
    <>
      <div className='flex flex-row' >
        <img src={AuthSideImag} className='h-screen' />
        <div className='w-full'>
          <div className='w-1/3 ml-auto mr-auto' >
            <div className='flex justify-center'>
              <img src={AuthLogo} className="mt-10" />
            </div>
            <Outlet {...props} />
          </div>
          </div>
      </div>
      
    </>
    
  )
}
export default AuthLayout;