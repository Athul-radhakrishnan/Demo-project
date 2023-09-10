import React from 'react'
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
import './SecondBanner.css'
import { MdPayment } from "react-icons/md";
import Button from '@mui/material/Button';




function SecondBanner() {
  return (
    <>
    <div>
        <Grid container spacing={0} className='main-container' >
         
        <Grid item  sm={4} xs={12} >
             <div className='second-card-div1'>
                 <p className='payment-icon-para'>< MdPayment className='payment-logo-icon' /> </p>
             </div>
       </Grid>
       <Grid item  sm={8} xs={12} >
            <div className='second-card-div2'>
                 <h3 className='paid-para'>Getting paid the easy way</h3>
                  <p>Simply getting paid and accept payments on your invoices.ypur invoicing and accounting will be automatically updated: no extra work</p>
                  <Button className='set-up-button' variant="outlined">Set up in seconds</Button>
                  
             </div>

         </Grid>
       
        </Grid>
        </div>
   
    </>
  )
}

export default SecondBanner