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

export default function ButtonAppBar({setPage, userId, changeSignIn, trySigningUp, tryLoading, changeLoading, watchFavourite, dontWatchFavourite, getSearchPainters, getTags,newPaint, isLoggedIn, toLogOut, isLoading, toWatchFavourite}) {

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed">
        <Toolbar>
        {isLoggedIn && !isLoading && <TemporaryDrawer userId={userId} edge="start" newPaint={newPaint}></TemporaryDrawer>}
        {isLoggedIn && !watchFavourite &&<Button onClick={ toWatchFavourite } color="inherit">FAVOURITES</Button>}
        {isLoggedIn && watchFavourite && <Button onClick={ dontWatchFavourite } color="inherit">PAINTINGS</Button>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {!isLoading && isLoggedIn &&<TagField getTags={getTags}></TagField>}
          {!isLoading && !tryLoading && !trySigningUp && <InputField getSearchPainters={getSearchPainters} />}
          {!tryLoading && !isLoggedIn && <Button color="inherit" onClick={e => setPage("login")}>LOG IN</Button>}
          {isLoggedIn &&  <Button color="inherit" onClick={toLogOut} >LOG OUT</Button>}
          {!isLoggedIn && <Button color="inherit" onClick={e => setPage("signIn")}>Sign Up</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}