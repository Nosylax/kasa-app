import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Cards />
      </div>
    </>
  );
}
