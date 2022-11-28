import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [objectId, setObjectId] = useState([]);


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

  const test = async () => {
    for (let i = 0; i < objectId.length; i++) {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId[i]}`
      );
      const data = await response.json();
      if (data.primaryImage !== "") {
        console.log(data);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    test();
  }, [objectId]);

  return <div className="App"></div>;
}

export default App;
