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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { useState } from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const PictureCard = ({tags, name, title, type, date, picture,firstLetter,isLoggedIn }) => {

    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
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
              <RemoveRedEyeIcon></RemoveRedEyeIcon>
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
        </CardContent>
        <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
           {isLoggedIn ? <FavoriteIcon sx={{ color: red[500]}}/> : <HeartBrokenIcon ></HeartBrokenIcon>}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          
        </Collapse>
      </Card>
    );
  }

  export default PictureCard;