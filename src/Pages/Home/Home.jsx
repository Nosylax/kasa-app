import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
export default function Home() {
  return (
    <>
      {/* <h2>Acceuil</h2>
      <Link to="/FicheLogement/">
        <button type="button">Fiche Logement</button>
      </Link> */}
      <div>
        <Banner />
      </div>
      <div class="locationContainer">
        <div class="locationCard">Item 1</div>
        <div class="locationCard">Item 2</div>
        <div class="locationCard">Item 3</div>
        <div class="locationCard">Item 4</div>
        <div class="locationCard">Item 5</div>
        <div class="locationCard">Item 6</div>
      </div>
    </>
  );
}
