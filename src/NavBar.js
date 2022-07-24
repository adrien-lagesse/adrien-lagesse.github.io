import React from 'react';
import {AppBar, Toolbar, Link, Button, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function NavBar(){
    return (
        <AppBar position="relative" sx={{borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
            <Toolbar>
                <Link component={RouterLink} variant="h5" underline='none' to="/" sx={{color:"secondary.main", margin:3}}>Adrien Lagesse</Link>
                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/blog" sx={{color:"secondary.main", margin:3, marginLeft:"auto"}}>Blog</Link>
                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/apps" sx={{color:"secondary.main", margin:3}}>Apps</Link>
                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/about" sx={{color:"secondary.main", margin:3}}>About</Link>

                <Link href="https://github.com/adrien-lagesse" sx={{color:"secondary.main", margin:1, marginLeft:"auto"}}>
                    <GitHubIcon />
                </Link>

                <Link href="https://www.linkedin.com/in/adrien-lagesse-18b1211b9/" sx={{color:"secondary.main", margin:1}}>
                    <LinkedInIcon/>
                </Link>

                <Link href="https://twitter.com/LagesseAdrien" sx={{color:"secondary.main", margin:1}}>
                    <TwitterIcon/>
                </Link>
            </Toolbar>
        </AppBar>

    );
}