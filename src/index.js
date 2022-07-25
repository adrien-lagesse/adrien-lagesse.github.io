import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import {ThemeProvider} from '@mui/material/styles';

import theme from './theme.js';

import App from './App.js';
import Blog from './routes/blog.js';
import Apps from './routes/apps.js';
import About from './routes/about.js';
import NotFound from './routes/404.js';
 
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route index path="/" element={<App/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/apps" element={<Apps/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>
    
);