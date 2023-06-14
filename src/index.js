import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSlidebar from "./components/Left";
import RightSlidebar from "./components/Right";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <div className="left">
      <LeftSlidebar />
    </div>

    <div className="right">
      <RightSlidebar />
    </div>
    <App />
  </BrowserRouter>
);
