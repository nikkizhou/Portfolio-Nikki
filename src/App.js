import { Home } from "./pages/Home";
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import image from "./assets/image.png"


const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const style = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  width:'100vw'
}


function App() {
  return (
    <div style={style}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
