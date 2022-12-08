import { useState } from "react";
import "./PictureUpload.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const PictureUpload = ({ userId }) => {

  const [newTitle, setNewTitle] = useState("")
  const [newDesc, setNewDesc] = useState("")
  const [newFile, setNewFile] = useState(null)

  const uploadArtwork = async (e) => {
    e.preventDefault();
    const auth = 'Bearer ' + userId;
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDesc);
    formData.append("file", newFile);
    console.log(auth);

    const response = await fetch("http://18.194.143.121:80/api/artwork", {
      method: 'POST',
      headers: {

        "Authorization": 'Bearer' + userId,
        "Content-type": "multipart/form-data",
      },
      body: formData
    })
    console.log(response);
  }

  return (
    <div className="uploadContainerDiv">
      <h1>Please upload a new picture:</h1>
      <div className="uploadDivForm">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            type="text"
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
          />
        </Box>
        <input
          type="file"
          placeholder="Picture description"
          onChange={e => setNewFile(e.target.files[0])}
        />
        {/* <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label" onClick={uploadArtwork} onChange={e => setNewFile(e.target.files[0])} endIcon={<PhotoCamera />}>
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button> 
        </Stack>  */}

        <button onClick={uploadArtwork}>Upload</button>
      </div>
      {newFile && <div className="uploadChoosenDiv">
        <h2>Choosen Photo:</h2>
        <img src={URL.createObjectURL(newFile)} alt="" />
        <h3>Title:{newTitle}</h3>
        <p>{newDesc}</p>
      </div>}
    </div>
  );
};

export default PictureUpload;
