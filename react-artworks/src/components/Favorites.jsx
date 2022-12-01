import "./Favorites.css"


const Favorites = ({favoritePaintings}) =>{
    return(
        <div className="favoritesContainerDiv">
            {favoritePaintings.length ? <h1>Your pictures marked as favourite:</h1> : <h1>Sorry, you don't have any favourite paintings yet!</h1>}
        </div>
    )
}
export default Favorites