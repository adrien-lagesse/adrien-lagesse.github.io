import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import { Button, Card, CardActions, CardContent, CardMedia, Divider, Paper, Typography } from '@mui/material';

import NavBar from './NavBar';
import profileImage from './assets/Profile.jpg'
import { Container } from '@mui/system';
import { grey } from '@mui/material/colors';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Card variant="outlined" 
            sx={{display:'flex', flexDirection:'col',  m:2, borderColor:"primary.main", boxShadow:4, "&:hover":{boxShadow:8},}}>
        <CardMedia component='img' src={profileImage} alt='Adrien Lagesse profile image' sx={{width:"15%"}}/>
        <Container>
          <CardContent>
            <Typography component="h1" sx={{fontSize:"2em", color:"primary.main"}}>
              About me
            </Typography>

            <Typography component="p" sx={{textDecoration:"justify", textIndent:"2em", color:grey[800]}}>
              My name is Adrien Lagesse, I am a Mauritian passionated about Mathematics, Geometry and Machine Learning. I am interested
              in the relationships that exists between Probability Theory, Geometry and Representation Learning. After two years at Lycée Louis
              Le Grand studying Mathematics and Physics I was admitted at École Polytechnique where I specialised in Applied Mathematics and
              worked on projects ranging from Monte-Carlo simulation to Graph Neural Networks and NLP. I will be pursuing a Master degree in Pure
              Mathematics at Imperial College London next year where I will learn about Game Theory and Geometry.
            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent:"center"}}>
            <Button variant='outlined' component="a" href="#">Download CV</Button>
            <Button variant='outlined' component={RouterLink} to="/about">Learn more</Button>
          </CardActions>
        </Container>
      </Card>
      <Divider textAlign='left' sx={{margin:"2%","&::before, &::after": {
        borderColor: "primary.main",
      }}}>
          <Typography component="h1" sx={{fontSize:"2em", color:"primary.main"}}>
            Latest
          </Typography>
      </Divider>

      <Card sx={{width:"20%", marginX:4, boxShadow:3, '&:hover':{boxShadow:6}}}>
        <CardContent>
          <Typography component="h2" sx={{fontSize:"1.3em", color:"primary.main"}}>
            Variational auto-encoders
          </Typography>
          <Typography component="p" sx={{color:grey[600]}}>
            A probabilist introduction to VAE and baselines to analyse the latent space.
          </Typography>
          <Typography component="p" sx={{color:grey[400]}}>
            July 25, 2022 
          </Typography >
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button variant='outlined'>Read more</Button>
        </CardActions>
      </Card>
    </div>
  );
}