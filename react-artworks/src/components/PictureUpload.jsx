import { useState } from "react";
import "./PictureUpload.css"

const PictureUpload = ({userId}) => {

  const [newTitle, setNewTitle] = useState("")
  const [newDesc, setNewDesc] = useState("")
  const [newFile, setNewFile] = useState(null)

  const uploadArtwork = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDesc);
    formData.append("imgfile", newFile);
    console.log(userId);

    const respone = await fetch("http://18.194.143.121:80/api/artwork", {
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
      <form className="uploadDivForm">
        <input
          type="text"
          placeholder="Picture title"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Picture description"
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
        />
        <input
          type="file"
          placeholder="Picture description"
          onChange={e => setNewFile(e.target.files[0])}
        />

        <button onClick={uploadArtwork}>Submit</button>
      </form>
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
