import React from "react";
import MapImg from "../map.svg";

export default function Card(props) {
  return (
    <section>
      <div className="part">
        <img className="traverl-places-images" src={props.imageUrl} />
        <div className="content">
          <div className="content-part-two">
            <img className="map-icon" src={MapImg} />
            <p className="country">{props.location}</p>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1>{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="information">{props.description}</p>
        </div>
      </div>
    </section>
  );
}
