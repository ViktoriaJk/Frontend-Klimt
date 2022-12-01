import "./Favorites.css"


const Favorites = ({favoritePaintings}) =>{
    return(
        <div className="favoritesContainerDiv">
            {favoritePaintings.length ? <h1>Van elmentet kep</h1> : <h1>Sorry, You dont have favorite paintings yet!</h1>}
        </div>
    )
}
export default Favorites