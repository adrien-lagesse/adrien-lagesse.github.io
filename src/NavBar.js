import React from 'react';
import {AppBar, Toolbar, Link, Divider, Box, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import LogoImage from './assets/logo.png'


export default function NavBar(){
    return (
        <AppBar position="relative" sx={{borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
            <Toolbar>
                <Link component={RouterLink} variant="h5" underline='none' display="flex" flexDirection="col" to="/" 
                      sx={{color:"secondary.main", marginX:3}}>
                    <Box component="img" alt="Adrien Lagesse logo" src={LogoImage} sx={{height:35, marginX:1.5}}/>
                    <Typography component="h1" sx={{margin:"auto", fontSize:"1em"}}>
                        Adrien Lagesse
                    </Typography>
                </Link>

                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/blog" 
                      sx={{color:"secondary.main", margin:3, marginLeft:"auto", "&:hover":{color:"primary.light"},}}>
                        Blog
                </Link>
                <Divider orientation='vertical' sx={{borderColor:'secondary.main', marginY:3}} flexItem />
                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/apps" 
                      sx={{color:"secondary.main", margin:3, "&:hover":{color:"primary.light"},}}>
                        Apps
                </Link>
                <Divider orientation='vertical' sx={{borderColor:'secondary.main', marginY:3}} flexItem />
                <Link component={RouterLink} underline='none' fontFamily={'sans-serif'} to="/about" 
                      sx={{color:"secondary.main", margin:3,"&:hover":{color:"primary.light"},}}>
                        About
                </Link>

                <Link href="https://github.com/adrien-lagesse" sx={{color:"secondary.main", margin:1, marginLeft:"auto"}}>
                    <GitHubIcon />
                </Link>

                <Link href="https://www.linkedin.com/in/adrien-lagesse-18b1211b9/" sx={{color:"secondary.main", margin:1}}>
                    <LinkedInIcon/>
                </Link>

                <Link href="https://twitter.com/LagesseAdrien" sx={{color:"secondary.main", margin:1}}>
                    <TwitterIcon/>
                </Link>
                <Link href="mailto:adrien.lagesse.pro@gmail.com" sx={{color:"secondary.main", margin:1}}>
                    <EmailIcon/>
                </Link>
            </Toolbar>
        </AppBar>

    );
}