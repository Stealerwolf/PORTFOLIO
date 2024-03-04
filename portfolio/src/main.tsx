import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

import "./main.css";
import Offcanvas from "./components/Offcanvas.tsx";
import Text from "./components/Text.tsx";
import Cards from "./components/Cards.tsx";
import BlackPage from "./components/BlackPage.tsx";
import Carousel from "./components/Carousel.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Offcanvas />
    <Text />
    <Cards />
    <BlackPage />
    <Carousel />
  </React.StrictMode>
);
