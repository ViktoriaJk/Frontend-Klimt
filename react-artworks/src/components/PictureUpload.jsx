import "./PictureUpload.css"

const PictureUpload = () => {
  return (
    <div className="uploadContainerDiv">
      <h1>Please upload a new picture:</h1>
      <form className="uploadDivForm">
        <input
          type="text"
          placeholder="Picture title"
        />
        <input
          type="text"
          placeholder="Picture description"
        />
        <input
          type="file"
          placeholder="Picture description"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PictureUpload;
