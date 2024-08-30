import React, { useEffect, useState } from "react";
import "./AccommodationSheet.css";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
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
  }, [param]);
  console.log(location);

  return (
    <>
      {location.title !== undefined ? (
        <div>
          <Slideshow pictures={location.pictures} />
          <div className="titleNamePicture">
            <div className="locationTitle">
              {location.title}
              <p className="locationLocation">{location.location}</p>
            </div>
            <div className="HostAndPicture">
              <div className="locationHostName">{location.host.name}</div>
              <div className="hostPictureBox">
                <img
                  className="hostPicture"
                  src={location.host.picture}
                  alt={`Portrait du propriétaire`}
                />
              </div>
            </div>
          </div>
          <div className="locationTags">
            {location.tags.map((tag, locationTag) => (
              <p className="locationTag" key={locationTag}>
                {tag}
              </p>
            ))}
          </div>
          <div className="locationCollapses">
            <Collapse title="Description" subtitle={location.description} />
            <Collapse
              title="Equipements"
              subtitle={location.equipments.map(
                (equipment, locationEquipment) => (
                  <p className="locationEquipments" key={locationEquipment}>
                    {equipment}
                  </p>
                )
              )}
            />
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
