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
  const [searchTag, setSearchTag] = useState ("")
  const [newPaintName,setNewPaint]= useState()


  const getSearchPainters = (e) =>{
    const lowerCased = e.target.value.toLowerCase()
    setSearchPainter(lowerCased)
    console.log(lowerCased)
  }

  const getTags = (e) =>{
    const lowerCased = e.target.value.toLowerCase()
    setSearchTag(lowerCased)
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
  .filter(painting => painting.artistDisplayName.toLowerCase().includes(searchPainter)) : []

  
//  const filteredTags = paintings ? paintings.filter(painting => {
//     for (const elem of painting.tags){
//       return (elem.term.toLowerCase().includes(searchTag))
//     }
//   }) : []

  
  
  return (
    <div className="App">
      <header>
        <div>
          <ButtonAppBar getSearchPainters={getSearchPainters}  getTags={getTags}/>
          
        </div>
      </header>

      <main>
        <div className="picturesContainer">
          {isLoading && <CircularStatic size={500} />}
          {paintings && !isLoading &&(
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
