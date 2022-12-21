import React, { lazy } from "react";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import image from "./assets/image.png"

const style = {backgroundImage: `url(${image})`}

function App() {
  return (
    <div className="App" style={style}>
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
