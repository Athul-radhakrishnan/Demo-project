import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import  './Dashboard.css'
import { BsBank } from "react-icons/bs";
import Button from '@mui/material/Button';
import {RxBox  } from "react-icons/rx";

function Dashboard() {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
    
      <Grid container spacing={2}>
      
  
        <Grid item sm={4} xs={12}>
        <h1 style={{textAlign:"center"}}>Dashboard</h1>
           <div className='dash-div1'>
           
              <p className='bank-icon-para'><BsBank className='bank-icon' /></p> 
              <h2 className='bank-icon-h1' >Connect your bank account or credit card</h2>
              <h4 className='bank-icon-h2'>Automatic your bookkeeping by importing transactions automatically</h4>
            <p className='acc-btn-para'><Button style={{borderRadius:"20px", fontSize:"10px"}} className='acc-btn' variant="outlined">Connetct my account</Button></p>
           </div>
        </Grid>
        <Grid item sm={8} xs={12}>
        <Grid container spacing={0}>
                <Grid item sm={7}  xs={12} >
                  <div className='profite-div2'>
                    <h3>Profite And Loss</h3>
                    <p>Income and expenses only (includes unpaid invoices and bills)</p>
                    <p><RxBox style={{backgroundColor:"greenyellow"}}/>Income  <RxBox style={{backgroundColor:"grey"}} /> Expense</p>
                   
   
                  </div>
                  </Grid>
                  <Grid item sm={5}  xs={12}  >
                  <div className='profite-div2'>
                  <p className='profite-para-view'>View Report</p>
                  <p className='profite-para-view1'>Last 24 Months</p>
                   
  
                  </div>
                  </Grid>
                  </Grid>
        </Grid>
    </Grid>
    </Box>
    </>
  )
}

export default Dashboard