import "./Favorites.css"
import http from "axios"
import { useState,useEffect } from "react"


const Favorites = ({userId}) =>{

    const [favoritePaintings,setFavoritePaintings] = useState([])
    const [newImgUrl,setNewImgUrl] = useState(null)
    let favorites = null;
    let img = [];

    const loadPaintings = async (userId) => { 
        const response = await http.get("http://18.194.143.121:80/api/artwork", {
          headers: { "Authorization": 'Bearer '+userId }
        })
 
       favorites=response.data
          setFavoritePaintings(favorites)
      }

      console.log(favoritePaintings,"egesz kep")
      
    const loadpicture = async (x) => {
      if(favoritePaintings.length !==0){
        for(const picture of favoritePaintings){
          const response = await http.get("http://"+picture.url, {
            headers: { 
              "Authorization": 'Bearer '+x }
          })
          img.push(response)
        }                 
      }
            console.log(img,"ulr")
            setNewImgUrl(img)
      }

      const init = async() =>{
       const data1= await loadPaintings(userId)
      }

    useEffect(()=>{
     init()
    },[])
    useEffect(()=>{
      loadpicture(userId)
     },[favoritePaintings])
 

    
    return(
        <div className="favoritesContainerDiv">
            {favoritePaintings.length && newImgUrl.length ? favoritePaintings.map((painting,index) => (
                      <div>
                        <img src={"data:image/jpg;base64,"+newImgUrl[index].data} alt="vmi" />
                        <h1>{painting.title}</h1>
                        <p>{painting.description}</p>
                      </div>
                )) :<h1>Sorry, you don't have any favourite paintings yet!...</h1>}
        </div>
    )
}
export default Favorites