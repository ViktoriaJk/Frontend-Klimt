import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TagField({getTags}) {
  return (
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-size-small"  label="Search by tags" size="small" variant="outlined" onChange={e=>getTags(e)} />
    </Box>
  );
}