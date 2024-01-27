import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import Offcanvas from "./components/Offcanvas.tsx";
import App from "./App.tsx";
import Cards from "./components/Cards.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Offcanvas />
    <App />
    <Cards />
  </React.StrictMode>
);
