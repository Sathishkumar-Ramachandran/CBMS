import { TextField} from '@mui/material'
import React from 'react'
import '../styles/Main.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const carditem = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Open Tickets
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
      </CardContent>


    <CardActions>
      <Button size="small">Open Tickets</Button>
    </CardActions>
  </React.Fragment>
);



const Main = () => {
  return(  
    <div className='dashboard-cards'>
      <Box sx={{ minWidth: 25 }}>
      <Card variant="outlined">{card}</Card>
      </Box>
      <Box sx={{ minWidth: 25 }}>
      <Card variant="outlined">{card}</Card>
      </Box>
      <Box sx={{ minWidth: 25 }}>
      <Card variant="outlined">{card}</Card>
      </Box>
    </div>

      )
    }
    
export default Main
