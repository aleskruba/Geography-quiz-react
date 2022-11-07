import { useState } from "react";
import {Routes,Route,Router } from "react-router-dom";
import Context from "./pages/Context";
import Home from "./pages/Home";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoutes from "./pages/PrivateRoutes";



function App() {




  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/level1' element={<Level1/>} />
            <Route element={<PrivateRoutes />} >
               <Route path='/level2' element={<Level2/>} />  
            </Route>
            <Route path='/context' element={<Context />} /> 
            <Route path="*" element={<PageNotFound/>}/>
        </Routes> 
 
    </div>
  );
}


export default App;
