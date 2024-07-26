import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h2>Acceuil</h2>
      <Link to="/FicheLogement">
        <button type="button">Fiche Logement</button>
      </Link>
    </>
  );
}
