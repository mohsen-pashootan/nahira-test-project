import React from "react";
import "./carousel.css";

export default function Carousel({ seederCarouse }) {
  return (
    <span className="tours-carousel">
      {seederCarouse.map((item) => (
        <artice className="image-container" key={item.id}>
          <img src={item.img.src} alt={item.img.alt} />
          <h3>{item.title}</h3>
        </artice>
      ))}
      <span className="prev">&#10095;</span>
      <span className="next">&#10094;</span>
    </span>
  );
}
