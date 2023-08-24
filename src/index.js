import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Register from "./register";
import Home from "./home";
import News from "./news";
import Geoter from "./geotermica";
import Eolica from "./eolica";
import Solar from "./solar";
import Navbar from "./navbar";
import Inversion from "./inversion"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="inversion" element={<Inversion />} />
          <Route path="news" element={<News />} />
          <Route path="geotermica" element={<Geoter />} />
          <Route path="eolica" element={<Eolica />} />
          <Route path="solar" element={<Solar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
