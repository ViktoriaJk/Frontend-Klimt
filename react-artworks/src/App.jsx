import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PictureCard from "./components/material/PictureCard";
import CircularStatic from "./components/Progress";
import ButtonAppBar from "./components/material/AppBar";

function App() {
  const [objectId, setObjectId] = useState([]);
  const [paintings, setpaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=GustavKlimt"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const init = async () => {
    const data = await getData();
    setObjectId(data.objectIDs);
  };

  const getPaintings = async () => {
    setIsLoading(true);
    const klimtPaintings = [];
    for (let i = 0; i < objectId.length; i++) {
      if (objectId[i] != 655303 && objectId[i] != 644042) {
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId[i]}`
        );
        const data = await response.json();
        if (data.primaryImage !== "") {
          klimtPaintings.push(data);
          console.log(data);
        }
      }
    }
    setpaintings(klimtPaintings);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getPaintings();
  }, [objectId]);

  return (
    <div className="App">
      <header>
        <div>
          <ButtonAppBar />
        </div>
      </header>

      <main>
        <div className="picturesContainer">
          {isLoading ? <CircularStatic size={500} /> : paintings.map(painting => <PictureCard title={painting.title} type={painting.classification} date={painting.objectDate} picture={painting.primaryImageSmall} />)}
        </div>
      </main>
    </div>
  )
}

export default App;
