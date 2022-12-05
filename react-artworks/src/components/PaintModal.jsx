import './PaintModal.css'

const PaintModal = ({wiki,repo,picture,tags, name, title, type, date}) =>{
    return(
        <div className="modalContainerDiv">
            <div className="modalleftDiv">
                <img src={picture}></img>
            </div>
            <div className="modalrightDiv">
                <h2>Title:<span>{title}</span></h2>
                <h2>Artist name: <span>{name}</span></h2>
                <h2>Artist wiki page: <a href={wiki} target="_blank">Click for more info</a></h2>
                <h2>Type:<span>{type}</span></h2>
                <h2>Repository:<span>{repo}</span></h2>
                <h2>Tags: {tags.map(tag => <span>{tag.term}, </span>) } </h2>
            </div>
        </div>
    )
}

export default PaintModal