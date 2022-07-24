import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, CardMedia } from '@mui/material';

import NavBar from './NavBar';
import profileImage from './assets/RNN.jpeg'

const theme = createTheme({
  palette:{
    primary:{
      main: "#001F54",
      light: "#669EFF"
    },
    secondary:{
      main: "#f1faee",
    }
  }
})

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <NavBar/>
    <Card variant="outlined" sx={{display:'flex', flexDirection:'col',  m:2}}>
      <CardMedia component='img' src={profileImage} alt='Adrien Lagesse profile image' sx={{width:"20%"}}/>
      <CardContent>
        My name is Adrien Lagesse, I am a Mauritian passionated about Mathematics, Geometry and Machine Learning.
      </CardContent>
    </Card>
  </ThemeProvider>
  );
}