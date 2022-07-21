import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App.js';
import Blog from './routes/blog.js';
import Apps from './routes/apps.js';
import About from './routes/about.js';
import NotFound from './routes/404.js';
 
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="blog" element={<Blog/>}/>
                <Route path="apps" element={<Apps/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
        <App />
    </BrowserRouter>
);