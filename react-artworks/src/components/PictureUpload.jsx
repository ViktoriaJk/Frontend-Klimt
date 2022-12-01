import { useState } from "react";
import "./PictureUpload.css"

const PictureUpload = () => {

  const[newTitle,setNewTitle]= useState("")
  const[newDesc,setNewDesc]= useState("")
  const[newFile,setNewFile]= useState(null)

  const sendData = (e) =>{
    e.preventDefault()

    const data = new FormData()
    data.append("title",newTitle)
    data.append("description",newDesc)
    data.append("file",newFile)

    fetch('/api', { method: 'POST', body: data })
      .then(res => res.json())
  }

  return (
    <div className="uploadContainerDiv">
      <h1>Please upload a new picture:</h1>
      <form className="uploadDivForm" onSubmit={sendData}>
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PictureUpload;
