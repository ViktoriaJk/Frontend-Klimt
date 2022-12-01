import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField({ getSearchPainters }) {
  return (
    <div>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField id="outlined-size-small" label="Search Painter" variant="outlined" size="small" onChange={e => getSearchPainters(e)}
        />
      </Box >
    </div>
  );
}