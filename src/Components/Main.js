import React, { useState } from "react";


//MUI COMPONENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const widgets = [
  {
    widgetName: "smallCard",
    component: <Card />,
    sx : { display: 'inline-block', mx: '2px', transform: 'scale(0.8)' },
  }
]


const content = [
  {
    cardTitle: "",


  }
]

const Main = () => {




  return(
    <>
      { content.map((item, index) => {
        <Card>
          <CardContent>
            
          </CardContent>
        </Card>
      })}
    </>
  )
};

export default Main;