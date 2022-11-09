const FunctionButtons = ({
  setModalIsOpen,
  setModalContent,
  selectedPlaylist,
  setEditPlaylist,
  editPlaylist,
}) => {
  const handleClickEdit = () => {
    setEditPlaylist(!editPlaylist);
  };

  const handleClickCopy = () => {
    setModalIsOpen(true);
    setModalContent("Copy Playlist");
  };
  const handleClickMerge = () => {
    setModalIsOpen(true);
    setModalContent("Merge Playlists");
  };
  const handleClickDelete = () => {
    setModalIsOpen(true);
    setModalContent("Delete Playlist");
  };
  const handleClickCreate = () => {
    setModalIsOpen(true);
    setModalContent("Update Playlist");
  };
  const handleClickUpload = () => {
    setModalIsOpen(true);
    setModalContent("Upload Playlist");
  };

  return (
    <>
      <div className="col d-flex align-items-center">
        <div>
        <h3 className="px-2  my-2 ms-1 text-dk" style={{fontWeight: "700", color: "black", letterSpacing: "0.05rem"}}>
          Playlist:
        </h3>
        <h4 className="px-2 ms-1  text-rk" style={{fontWeight: "600", color: "black", letterSpacing: "0.05rem"}}>
          {selectedPlaylist && selectedPlaylist.name}
        </h4>
        </div>
      </div>
      <div className="col d-flex align-items-center justify-content-end me-2 ">
        {editPlaylist ? (
          <button
            type="button"
            onClick={handleClickCreate}
            className="btn btn-light m-1"
          >
            Update
          </button>
        ) : (
          <div className="mt-5"></div>
        )}
      </div>
      <div className="row  m-0   ">
        <div className="col ">
          <div className="text-end pe-1">
            <label style={{fontWeight: "600", color: "black", letterSpacing: "0.03rem"}}>Playlist Functions</label>
          </div>
          <button
            type="button"
            onClick={handleClickEdit}
            className="btn btn-dark ms-2 float-end mt-1"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleClickDelete}
            className="btn btn-dark ms-2 float-end mt-1"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={handleClickMerge}
            className="btn btn-dark ms-2 float-end mt-1"
          >
            Merge
          </button>
          <button
            type="button"
            onClick={handleClickCopy}
            className="btn btn-dark ms-2 float-end mt-1"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleClickUpload}
            className="btn btn-light ms-2 float-end mt-1"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default FunctionButtons;
