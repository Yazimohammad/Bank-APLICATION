import React from "react"
import "./componenets/common.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Banks } from "./componenets/Banks";
import { Home } from "./componenets/Home";
import { Navbar } from "./componenets/Navbar";
import { Benef } from "./componenets/Benef";

function App() {
  return (
    <div className="main" >
      <h1>Bank App</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/banks" element={<Banks/>}/>
        <Route path="/benef" element={<Benef/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
