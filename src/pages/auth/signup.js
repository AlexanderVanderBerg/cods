import React from 'react'
import { Typography } from '@mui/material';

const SignUpPage=props=>{
  return (
    <>
      <Typography align='center' margin={2} variant='h3' component={`h3`} >Registration</Typography>
      <Typography margin={2} align='center' variant='h5' component={`h5`} >Enter your personal Detail To register</Typography>
    </>
  )
}
export default SignUpPage;