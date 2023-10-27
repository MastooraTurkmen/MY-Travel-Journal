# MY Travel Journal

> https://travel-tour-journal.netlify.app/

## Hi there, 
This is my Travel Journal, you can find different types of countries and you can also see them on Google Maps. 

Thank you sooo much, Enjoyyyy :)))

![Screenshot 2023-10-02 164625](https://github.com/MastooraTurkmen/MY-Travel-Journal/assets/132576850/2c754ab8-bb57-4282-bf4e-08edac79010e)


## *App JSX*

```
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
```

# *Components*
1. Card JSX
2. Navbar JSX
   
## *Card JSX*

```
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

```


## *Navbar JSX*

```
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
```

