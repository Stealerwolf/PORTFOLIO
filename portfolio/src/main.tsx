import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import Offcanvas from "./components/Offcanvas.tsx";
import Text from "./components/Text.tsx";
import Cards from "./components/Cards.tsx";
import BlackPage from "./components/BlackPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Offcanvas />
    <Text />
    <Cards />
    <BlackPage />
  </React.StrictMode>
);
