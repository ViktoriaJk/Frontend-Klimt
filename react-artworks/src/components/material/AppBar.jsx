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
import "../Logo.css";

export default function ButtonAppBar({ page, setPage, userId, changeSignIn, trySigningUp, tryLoading, changeLoading, watchFavourite, dontWatchFavourite, getSearchPainters, getTags, newPaint, isLoggedIn, toLogOut, isLoading, toWatchFavourite }) {

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed">
        <Toolbar>
          <div className="units">
              <div>Klimt Art Magazine</div>
              <div>Klimt Art Magazine</div>
          </div>
          {isLoggedIn && !isLoading && <TemporaryDrawer userId={userId} edge="start" newPaint={newPaint}></TemporaryDrawer>}
          {isLoggedIn && !watchFavourite && <Button onClick={toWatchFavourite} color="inherit">FAVOURITES</Button>}
          {isLoggedIn && watchFavourite && <Button onClick={dontWatchFavourite} color="inherit">PAINTINGS</Button>}
          {/* {page === "login" && <Button onClick={e => setPage("")} color="inherit">HOME</Button>}
          {page === "signIn" && <Button onClick={e => setPage("")} color="inherit">HOME</Button>} */}
          {!isLoading && isLoggedIn && <TagField getTags={getTags}></TagField>}
          {!isLoading && !tryLoading && !trySigningUp && <InputField getSearchPainters={getSearchPainters} />}
          {!tryLoading && !isLoggedIn && <Button color="inherit" onClick={e => setPage("login")}>LOG IN</Button>}
          {isLoggedIn && <Button color="inherit" onClick={toLogOut} >LOG OUT</Button>}
          {!isLoggedIn && <Button color="inherit" onClick={e => setPage("signIn")}>Sign Up</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}