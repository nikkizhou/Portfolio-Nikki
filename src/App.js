import { Home } from "./pages/Home";
import React, { lazy } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";


const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
