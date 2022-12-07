import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PictureCard from "./components/material/PictureCard";
import ButtonAppBar from "./components/material/AppBar";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Favorites from "./components/Favorites";
import LoadingAnimation from "./components/loadingAnimation";

function App() {
  const [objectId, setObjectId] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPainter, setSearchPainter] = useState("")
  const [tryLoading,setTryLoading]=useState(false)
  const [trySigningUp,setTrySigningUp]=useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [firstLetter, setFirstLetter] = useState("")
  const [searchTag, setSearchTag] = useState("")
  const [watchFavourite,setWatchFavourite] = useState(false)
  const [ userId, setUserId ] = useState(null);
  const [page,setPage] = useState("")

  const changeLoading = () =>{
    setTrySigningUp(false)
    setTryLoading(true)
  }
  const changeSignIn = () =>{
    setTrySigningUp(true)
    setTryLoading(false)
  }

  const dontWatchFavourite = () =>{
    setWatchFavourite(false)
  }

  const toWatchFavourite = () =>{
    setWatchFavourite(true)
  }

  const toSignIn = () =>{
    setTryLoading(true)
    setTrySigningUp(false)
  }
  const toLogIn = (firstLetter) => {
    setFirstLetter(firstLetter)
    setIsLoggedIn(true)
    setTryLoading(false)
  }
  const toLogOut = () => {
    setIsLoggedIn(false)
    setWatchFavourite(false)
    setPage("")
  }

  const getSearchPainters = (e) => {
    const lowerCased = e.target.value.toLowerCase()
    setSearchPainter(lowerCased)
    // console.log(lowerCased)
  }

  const getTags = (e) => {
    const lowerCased = e.target.value.toLowerCase()
    setSearchTag(lowerCased)
    // console.log(searchPainter)
  }

  const getData = async () => {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&medium=Paintings&q=ClaudeMonet"
    );
    const data = await response.json();
    // console.log(data);
    return data;
  };

  const init = async () => {
 
    const data = await getData();
    setObjectId(data.objectIDs);
  };

  const getPaintings = async () => {
    setIsLoading(true)
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
    getPaintings();
    
  }, [objectId]);

  useEffect(() => {
    init();
  }, []);

  const filteredPainters = paintings ? paintings
    .filter(painting => painting.artistDisplayName.toLowerCase().includes(searchPainter))
    .filter(painting => {
      let contain =false
      for (const elem of painting.tags){
        console.log(elem.term);
        if(elem.term.toLowerCase().includes(searchTag)){
          contain=(elem.term.toLowerCase().includes(searchTag))
        }
      }
      return contain
    })
    : []
    console.log(page)

  return (
    <div className="App">
      <header>
        <div>
          <ButtonAppBar page={page} userId={userId} setPage={setPage} changeSignIn={changeSignIn} trySigningUp={trySigningUp}  tryLoading={tryLoading} changeLoading={changeLoading} watchFavourite ={watchFavourite} dontWatchFavourite={dontWatchFavourite} toWatchFavourite={toWatchFavourite} isLoading={isLoading} isLoggedIn={isLoggedIn} toLogOut={toLogOut} getSearchPainters={getSearchPainters} getTags={getTags} />
        </div>
      </header>

      <main>
        { page==="login" &&<Login setPage={setPage} setUserId={setUserId} toLogIn={toLogIn} getPaintings={getPaintings}></Login>}
        { page==="signIn" && <SignIn toSignIn={toSignIn} setPage={setPage}></SignIn>}
        <div className="picturesContainer">
          {isLoading && <LoadingAnimation/>}
          {watchFavourite &&  <Favorites userId={userId} ></Favorites>}
          {!isLoading && paintings && page==="" && !watchFavourite &&  
            <>
              {filteredPainters.length ? filteredPainters
                .map(painting => (
                  <PictureCard
                    name={painting.artistDisplayName}
                    title={painting.title}
                    type={painting.classification}
                    date={painting.objectDate}
                    picture={painting.primaryImageSmall}
                    tags={painting.tags}
                    firstLetter={firstLetter}
                    repo = {painting.repository}
                    wiki ={painting.artistWikidata_URL}
                    userId={userId}
                    isLoggedIn={isLoggedIn} />
                )) : <p>Nothing found</p>}
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default App;
