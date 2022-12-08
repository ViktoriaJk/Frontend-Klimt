import "./Favorites.css"
import http from "axios"
import { useState,useEffect } from "react"
import PictureCard from "./material/PictureCard"


const Favorites = ({userId,watchFavorite}) =>{

    const [favoritePaintings,setFavoritePaintings] = useState([])
    const [newImgUrl,setNewImgUrl] = useState([])
    let favorites = null;
    const img = [];

    const loadPaintings = async (userId) => { 
        const response = await http.get("http://18.194.143.121:80/api/artwork", {
          headers: { "Authorization": 'Bearer '+userId }
        })
 
       favorites=response.data
          setFavoritePaintings(favorites)
      }

      console.log(favoritePaintings)
 
    const loadpicture = async (x) => {
            for(const picture of favoritePaintings){
              const response = await http.get("http://"+picture.url, {
                headers: { 
                  "Authorization": 'Bearer '+x }
              })
              img.push(response)
              console.log(response)
              console.log(img)
            }                 
            setNewImgUrl(img)
      }



    useEffect(()=>{
      loadPaintings(userId)
      loadpicture(userId)
    },[])
 

    
    return(
        <div className="favoritesContainerDiv">
            {favoritePaintings.length ? favoritePaintings.map((painting,index) => (
                      <div>
                        <h1>{painting.title}</h1>
                        <p>{painting.description}</p>
                      </div>
                )) :<h1>Sorry, you don't have any favourite paintings yet!</h1>}
        </div>
    )
}
export default Favorites