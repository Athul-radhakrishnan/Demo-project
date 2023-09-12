import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Income.css'

function Income() {
  return (
    <>
      <div className='income-main-div'>
       <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
                 <Grid item sm={4} xs={12}>
                     
               </Grid>
               <Grid item sm={8} xs={12}>
                <h3>Net Income</h3>
               <table>
                <tr>
                    <th>Fiscal year</th>
                    <th>Previous</th>
                    <th>Current</th>
               </tr>
               <tr>
                   <td>Income</td>
                   <td className='td-amount'>$0.00</td>
                   <td className='td-amount'>$0.00</td>
              </tr>
               <tr>
                   <td>Expense</td>
                   <td className='td-amount'>$0.00</td>
                   <td className='td-amount'>$0.00</td>
              </tr>
               <tr>
                   <td>Net income</td>
                   <td className='td-amount'>$0.00</td>
                   <td className='td-amount'>$0.00</td>
              </tr>
              
         </table>
                     
              </Grid>
        </Grid>
           </Box>
      </div>
      
    </>
  )
}

export default Income