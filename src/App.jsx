import React from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import data from "../data";

export default function App() {
  const items = data.map((item) => {
    return <Card className="card-container" key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Navbar />
      {items}
    </div>
  );
}
