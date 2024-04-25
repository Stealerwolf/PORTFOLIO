import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "../main.css";
import Offcanvas from "../components/Offcanvas.tsx";
import Text from "../components/TextHome.tsx";
import Cards from "../components/Cards.tsx";
import BlackPage from "../components/BlackPage";
function Home() {
  return (
    <>
      <Offcanvas />
      <Text />
      <Cards />
      <BlackPage />
    </>
  );
}

export default Home;
