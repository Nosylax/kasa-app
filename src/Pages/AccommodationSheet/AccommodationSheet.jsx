import React, { useEffect, useState } from "react";
// import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";

export default function AccommodationSheet() {
  const param = useParams();
  console.log(param);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/properties/" + param.id
        );
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [param]); // Le tableau vide [] signifie que l'effet s'exécute une seule fois après le montage du composant
  console.log(location);
  return (
    <>
      {/* <div>
        <Slideshow />
      </div> */}
    </>
  );
}
