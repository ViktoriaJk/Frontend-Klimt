import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputField from './InputField';
import TagField from './TagField';
import TemporaryDrawer from './InputDrawer';

export default function ButtonAppBar({watchFavourite,dontWatchFavourite,getSearchPainters, getTags,newPaint,isLoggedIn,toLogOut,isLoading,toWatchFavourite}) {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static">
        <Toolbar>
        {isLoggedIn && !isLoading && <TemporaryDrawer edge="start" newPaint={newPaint}></TemporaryDrawer>}
        {!watchFavourite && isLoggedIn && <Button onClick={ toWatchFavourite } color="inherit">FAVOURITES</Button>}
        {watchFavourite &&<Button onClick={ dontWatchFavourite } color="inherit">PAINTINGS</Button>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {isLoggedIn && !isLoading && <TagField getTags={getTags}></TagField>}
          {isLoggedIn && !isLoading && <InputField getSearchPainters={getSearchPainters} />}
          {!isLoggedIn && <Button color="inherit">LOG IN</Button>}
          {isLoggedIn && <Button color="inherit" onClick={toLogOut} >LOG OUT</Button>}
          {!isLoggedIn && <Button color="inherit">Sign In</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}