import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Chart.css'

function Chart() {
  return (
    <>
    <div className='second-pie-grid'>
    <Box sx={{ flexGrow: 1 }}  >
            <Grid container spacing={2}>
            <Grid item sm={4}>
                    
                    </Grid>
               <Grid item sm={8} xs={12} >
                <Grid container >
                <Grid item sm={6} xs={12}>
                    <h3 >Expense Breakdown</h3>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="expense-head">This Year <span className='expense-span'>This Month</span></p>

                </Grid>
                </Grid>
                <div className='parent_div'>
                    
                    <div className='child_div '>
                       
                    </div>
                </div>
                     
               </Grid>
               </Grid>
         </Box>
         </div>
    </>
  )
}

export default Chart