import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routers />
   </BrowserRouter>
   </>
  );
}

export default App;
