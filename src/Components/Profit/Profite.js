import React from 'react'
import './Profite.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {RxBox  } from "react-icons/rx";

function Profite() {
  return (
    <>
      <Box>
        <Grid container>
            <Grid item sm={4}  xs={12}>
                <div className='profite-div1'>
                       <h2 >Things You Can Do</h2>
                       <h4 className='profite-things-heading'>Add a vendor</h4>
                       <h4 className='profite-things-heading'>Customize your invoices</h4>
                       <h4 className='profite-things-heading'>Invite a guest collaborator</h4>
                       <h4 className='profite-things-heading'>Proffessional accounting help</h4>
                       <h4 className='profite-things-heading'>Accept credit cards to get paid faster </h4>


                </div>

            </Grid>
            <Grid item sm={8}  xs={12} style={{borderBottom:"1px solid black"}}>
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

export default Profite