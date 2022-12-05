import "./Favorites.css"
import http from "axios"
import { useState,useEffect } from "react"


const Favorites = ({userId}) =>{

    const [favoritePaintings,setFavoritePaintings] = useState([])

    const loadPaintings = async (userId) => {
        const response = await http.get("http://localhost:3000/api/post", {
          headers: { "authorization": userId }
        })
        setFavoritePaintings(response)
      }

  /*   useEffect(()=>{
        loadPaintings(userId)
    },[])   */
    
    return(
        <div className="favoritesContainerDiv">
            {favoritePaintings.length ? favoritePaintings.map(painting => (
                  <PictureCard
                    name={painting.artistDisplayName}
                    title={painting.title}
                    type={painting.classification}
                    date={painting.objectDate}
                    picture={painting.primaryImageSmall}
                    tags={painting.tags}
                    firstLetter={firstLetter}
                    isLoggedIn={isLoggedIn} />
                )) :<h1>Sorry, you don't have any favourite paintings yet!</h1>}
        </div>
    )
}
export default Favorites