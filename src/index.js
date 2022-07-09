
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* When needed non-name div is called fragment  or <React.Fragment> same as empty </React.Fragment>*/}
    
    <> 
    {/* Add Global Style */}
      <GlobalStyle/>
    {/* Add React Router */}
      <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home/>}></Route>
              <Route path="about" element={<About/>}></Route>
              <Route path="services" element={<Services/>}></Route>
              <Route path="work" element={<Work/>}></Route>
              <Route path="contact" element={<Contact/>}></Route>
            </Route>
          </Routes>
      </Router>   

    </>
   
  </React.StrictMode>
);

