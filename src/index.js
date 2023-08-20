import React from "react";
import "./index.css"
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Contact from "./contact";
import Navbar from "./navbar"
import Inversion from "./inversion"
import News from "./news"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="inversion" element={<Inversion />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
