import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./Books";
import Student from "./Students";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/students" element={<Student />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
