import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdPayment,MdKeyboardArrowDown   } from "react-icons/md";
import './FirstBanner.css'


function FirstBanner() {

    const [state, setState] = React.useState({
        
        left: false,
       
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Dshboard', 'Sales&Payment', 'Purchases', 'Accounting','Banking','Payroll','Reports','Wave Advisor','Tax Filling '].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
           <Divider />
           <p>Integration </p>
           <p>Settings</p>
             <p className='btn-para-center'> <Button style={{color:"black"}} className='side-bar-button' variant="outlined" startIcon={<MdPayment />}>
               Accept Payments
           </Button></p>
          </List>
          
         
        </Box>
      );
    


  return (
    <div >
         {['Breathout'].map((anchor) => (
        <React.Fragment key={anchor}>
            
          <Button  onClick={toggleDrawer(anchor, true)}>{anchor} <MdKeyboardArrowDown style={{fontSize:"30px"}}  /></Button>
   
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            {list(anchor)}
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default FirstBanner