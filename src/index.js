import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Books from "./Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Students";
import Navbar from "./Navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Books /> }/>
        <Route path="/students" element={ <Student /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
