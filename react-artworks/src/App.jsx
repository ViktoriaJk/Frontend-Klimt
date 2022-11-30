import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PictureCard from "./components/material/PictureCard";
import CircularStatic from "./components/Progress";
import ButtonAppBar from "./components/material/AppBar";

function App() {
  const [objectId, setObjectId] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPainter,setSearchPainter] = useState("")


  const getSearchData = (e) =>{
    setSearchPainter(e.target.value)
    console.log(searchPainter)
  }

  const getData = async () => {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&medium=Paintings&q=ClaudeMonet"
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
    setPaintings(klimtPaintings);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getPaintings();
  }, [objectId]);

  const filteredPainters = paintings ? paintings
  .filter(painting => painting.artistDisplayName.includes(searchPainter)) : []
  
  return (
    <div className="App">
      <header>
        <div>
          <ButtonAppBar getSearchData={getSearchData} />
        </div>
      </header>

      <main>
        <div className="picturesContainer">
          {isLoading && <CircularStatic size={500} />}
          {paintings &&(
            <>
            {filteredPainters.length ? filteredPainters
                        .map(painting => (
                          <PictureCard
                          name={painting.artistDisplayName}
                          title={painting.title}
                          type={painting.classification}
                          date={painting.objectDate}
                          picture={painting.primaryImageSmall} />
                        )) : <p>Nothing found</p> }    
            </>            
          ) }
      

        </div>
      </main>
    </div>
  )
}

export default App;
