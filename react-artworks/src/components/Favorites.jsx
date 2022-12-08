import "./Favorites.css"
import http from "axios"
import { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const Favorites = ({ userId }) => {

    const [favoritePaintings, setFavoritePaintings] = useState([])
    const [newImgUrl, setNewImgUrl] = useState(null)
    let favorites = null;
    let img = [];

    const loadPaintings = async (userId) => {
        const response = await http.get("http://18.194.143.121:80/api/artwork", {
            headers: { "Authorization": 'Bearer ' + userId }
        })

        favorites = response.data
        setFavoritePaintings(favorites)
    }

    console.log(favoritePaintings, "egesz kep")

    const loadpicture = async (x) => {
        if (favoritePaintings.length !== 0) {
            for (const picture of favoritePaintings) {
                const response = await http.get("http://" + picture.url, {
                    headers: {
                        "Authorization": 'Bearer ' + x
                    }
                })
                img.push(response)
            }
        }
        console.log(img, "ulr")
        setNewImgUrl(img)
    }

    const init = async () => {
        const data1 = await loadPaintings(userId)
    }

    useEffect(() => {
        init()
    }, [])
    useEffect(() => {
        loadpicture(userId)
    }, [favoritePaintings])

    return (
        <div className="favoritesContainerDiv">
            {favoritePaintings.length && newImgUrl.length ? favoritePaintings.map((painting, index) => (
                <>
                    {/* <div>
                        <img src={"data:image/jpg;base64," + newImgUrl[index].data} alt="vmi" />
                        <h1>{painting.title}</h1>
                        <p>{painting.description}</p>
                    </div> */}
                    <Card
                        sx={{ width: 400, bgcolor: '#eee' }}
                    >
                        <CardHeader />
                        <div style={{ height: 310 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', maxWidth: 400, height: '100%', margin: '0 auto', maxHeight: 300, objectFit: 'fill' }}
                                image={"data:image/jpg;base64," + newImgUrl[index].data}
                                title={painting.title}
                                alt="favourite picture"
                            />
                        </div>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {painting.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {painting.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </>
            )) : ""}
        </div>
    )
}
export default Favorites