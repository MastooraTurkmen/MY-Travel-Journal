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


