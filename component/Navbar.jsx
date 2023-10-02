import React from "react";
import WorldImg from "../world.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={WorldImg} />
      <h3>my travel journal.</h3>
    </div>
  );
}
