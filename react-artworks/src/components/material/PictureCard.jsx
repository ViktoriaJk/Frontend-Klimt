import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PaintModal from '../PaintModal';
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

  const PictureCard = ({desc,userId,repo,wiki,tags, name, title, type, date, picture,firstLetter,isLoggedIn }) => {

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
  
    
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const uploadArtwork = async() => {

    }
    
/*         // KEP LETOLTESI FUNKCIO KEZDETE:
        const pictureUpload = () =>{
          var processStatus = function (response) {// process status
            if (response.status === 200 || response.status === 0) {
              return Promise.resolve(response)
            } else {
              return Promise.reject(new Error('Error loading:'))
            }
          };
          
          var parseBlob = function (response) {
            return response.blob();
          };
          
          var parseJson = function (response) {
            return response.json();
          };
          
          // download/upload
          var downloadFile = function (url) {
            return fetch(url)
              .then(processStatus)
              .then(parseBlob);
          };
          
          function uploadImageToImgur(blob) {
            let formData = new FormData();
            let auth = "Bearer"+userId;
            console.log(auth)
            formData.append('file': blob);
            formData.append('title':title)
            formData.append('description':type)
            formData.append('tags':"proba")
        
            for (const key of formData.entries()) {
              console.log(key);
            }

            return fetch('http://18.194.143.121:80/api/artwork', {
              method: 'POST',
              headers: {
                "Authorization": 'Bearer '+userId,
                "Content-type": "multipart/form-data",
              },
              body: formData
            })
              .then(processStatus)
              .then(parseJson);
          }
        
          
          // --- ACTION ---
          var sourceImageUrl = picture;
          console.log('Started downloading image from <a href=' + sourceImageUrl);
          
          downloadFile(sourceImageUrl)// download file from one resource
            .then(uploadImageToImgur)// upload it to another
            .then(function (data) {
              console.log('Image successfully uploaded');
            })
            .catch(function (error) {
              console.error("vmi hiba van a feltoltesnel "+error);
            });
          }
          // KEPFELTOLTESI FUNKCIOK VEGE   */
  
    return (
      <Card 
      sx={{ width: 400, bgcolor: '#eee' }}
      onClick={e =>{ console.log()}}
      >
        <CardHeader
         avatar={
           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
             {firstLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <RemoveRedEyeIcon onClick={handleOpen}></RemoveRedEyeIcon>
            </IconButton>
          }
          title={name}
          subheader={type + ', ' + date+" "}
        />
        <div style={{height: 310}}>
        <CardMedia
          component="img"
          style={{width: 'auto', maxWidth: 400, height: '100%', margin: '0 auto', maxHeight: 300, objectFit: 'fill'}}
          image={picture}
          title={title}
          alt=""
        />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
           {isLoggedIn ? <FavoriteIcon  sx={{ color: red[500]}}/> : <HeartBrokenIcon ></HeartBrokenIcon>}
          </IconButton>
        </CardActions>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ width: 900 }} className="modalBox">
          <PaintModal handleClose={handleClose} wiki={wiki} repo={repo} tags={tags} name={name} title={title} type={type} date={date} picture={picture}></PaintModal>
        </Box>
      </Modal>
      </Card>
    );
  }

  export default PictureCard;