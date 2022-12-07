import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import PictureUpload from '../PictureUpload';
import UploadIcon from '@mui/icons-material/Upload';

export default function TemporaryDrawer({newPaint, userId}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550 }}
      role="presentation"
      /* onClick={toggleDrawer(anchor, false)} */
      /* onKeyDown={toggleDrawer(anchor, false)} */
    >
      <PictureUpload userId={userId}></PictureUpload>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" sx={{color:"inherit"}} startIcon={<UploadIcon />} onClick={toggleDrawer(anchor, true)}>UPLOAD
          </Button>
          <Drawer
            anchor={"left"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}