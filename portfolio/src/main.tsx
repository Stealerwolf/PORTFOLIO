import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import Offcanvas from "./components/offcanvas.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Offcanvas />
  </React.StrictMode>
);
