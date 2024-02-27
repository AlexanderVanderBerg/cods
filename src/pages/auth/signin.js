import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';

const SignInPage=props=>{
  return (
    <>
      <Typography align='center' sx={{marginTop:`1vh`}} variant='h3' component={`h3`} >Login</Typography>
      <Typography margin={2} align='center' variant='h5' component={`h5`} >Enter your Detail To continue</Typography>
      <form onSubmit={e=>e.preventDefault} >
        <Typography marginTop={4}  variant='normal' component={`p`} >Enter your Detail To continue</Typography>
        <TextField variant='filled' margin='normal' size='small' fullWidth  />
        <Typography marginTop={4} variant='normal' component={`p`} >Enter your Detail To continue</Typography>
        <TextField variant='filled' margin='normal' size='small' fullWidth  />
        <div className="flex justify-center" >
          <Fab color='main' sx={{width:"40%",marginTop:3}} variant="extended">
            Log In
          </Fab>
        </div>
        <Typography marginTop={5} align='center' variant='h6' component={`h6`} >Forgot Password?</Typography>
        
      </form>
      <Typography  marginTop={5} align='center' variant='h6' component={`h6`}>Don't Have an Account? <Link to="/auth/signup" style={{color:"#2E3192"}} >Reigster</Link> Now</Typography>
    </>
  )
}
export default SignInPage;