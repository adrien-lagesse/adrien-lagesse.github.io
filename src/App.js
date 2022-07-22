import React from 'react';
import {AppBar, Toolbar, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { blue } from '@mui/material/colors';

export default function App() {
  return (
  <AppBar position="relative" sx={{background: blue[900], borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
    <Toolbar>
      <Link to="/">Adrien Lagesse</Link>
      <Link to="/blog">Blogs</Link>
      <Link to="/apps">Apps</Link>
      <Link to="/about">About</Link>

      <Typography color="inherit" component="div" sx={{margin:1, marginLeft:"auto"}}>
        <a href="#">Github</a>
      </Typography>

      <Typography color="inherit" component="div" sx={{margin:1}}>
        <a href="#">Linkedin</a>
      </Typography>

      <Typography color="inherit" component="div" sx={{margin:1}}>
        <a href="#">Twitter</a>
      </Typography>

    </Toolbar>
  </AppBar>
  );
}