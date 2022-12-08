import './PaintModal.css'

const PaintModal = ({handleClose,wiki,repo,picture,tags, name, title, type, date}) =>{
    return(
        <div className="modalContainerDiv">
            <div className="modalleftDiv">
                <img src={picture}></img>
            </div>
            <div className="modalrightDiv">
                <h3 id='close' onClick={handleClose}>✖️</h3>
                <h2>Title: <span>{title}</span></h2>
                <p>Artist name: <span>{name}</span></p>
                <p>Artist wiki page: <a href={wiki} target="_blank">Click for more info</a></p>
                <p>Type: <span>{type}</span></p>
                <p>Repository: <span>{repo}</span></p>
                <p>Tags: {tags.map(tag => <span>{tag.term}, </span>) } </p>
            </div>
        </div>
    )
}

export default PaintModal