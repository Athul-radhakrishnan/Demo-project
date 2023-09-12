import React from 'react'
import './Payable.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Payable() {
  return (
    <>
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                 <Grid item sm={4} xs={12}>
                     
           </Grid>
                <Grid item sm={8} xs={12}>
                   
                    <Grid container spacing={2} >
                        <Grid item sm={6} xs={12}>
                         <div className='payabl-first-div'>
                              <h3 className='payable_header'>Payable & Owing</h3>
                                <table className='table-first'>
                                    <tr>
                                        <th className='first-table-th'>invoices Payable to you</th>
                                        <th ></th>
                                    </tr>
                                    <tr>
                                        <td className='coming-due'>Coming Due</td>
                                        <td >$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>1-30 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                     <tr> 
                                        <td>30-60 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>60-90 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td> 1- 90 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>

                                
                                </table>
   
                        </div>

                        </Grid>
                        <Grid item sm={6} xs={12}>

                        <div className='payabl-first-div'>
                              <div className='payable_header2'></div>
                                <table className='table-first'>
                                    <tr>
                                        <th className='first-table-th'>Bills you owe</th>
                                        <th ></th>
                                    </tr>
                                    <tr>
                                        <td className='coming-due'>Coming Due</td>
                                        <td >$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>1-30 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                     <tr> 
                                        <td>1-30 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>1-30 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>1-30 days overdue</td>
                                        <td>$0.00</td>
                                    </tr>

                                
                                </table>
   
                        </div>
                            
                        </Grid>
                    </Grid>
               </Grid>
                
              </Grid>
        </Box>

        </div>
    </>
  )
}

export default Payable