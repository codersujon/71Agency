import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from "./styles/globalStyles";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* When needed non-name div is called fragment  or <React.Fragment> same as empty </React.Fragment>*/}
    
    <> 
      <GlobalStyle/>
      <App />
    </>
   
  </React.StrictMode>
);

