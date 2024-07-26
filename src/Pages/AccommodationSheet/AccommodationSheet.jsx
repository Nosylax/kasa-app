import React from "react";
import { useParams } from "react-router-dom";
export default function AccommodationSheet() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <h2>Fiche Logement</h2>
    </>
  );
}
