import { useState } from "react";
import { createPlaylist } from "../utils";

const CopyPlaylist = ({
  tracks,
  cookies,
  setUser,
  closeModal,
  modalContent,
  playlists,
  setEditPlaylist,
  setPage,
}) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [input, setInput] = useState("");

  const handleSumbit = async () => {
    if (!input) {
      return;
    }
    if (playlists.some((x) => x.name === input)) {
      alert("You already have a playlist with that name.");
      return;
    }
    const status = await createPlaylist(input, tracks, cookies, setUser);
    if (status !== 200) {
      alert("An error occured.");
    }
    closeModal();
    setEditPlaylist(false);
    setPage(1);
  };

  return (
    <div className=" d-flex flex-column ">
      <form className="form-inline px-2 mt-4">
        <div className="form-group mx-sm-3 mb-3">
          <label className="" style={{ maxWidth: "270px" }}>
            Copy tracks of selected genre into a new playlist.<br></br>
          </label>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label className=" mb-1">Select a playlist name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Playlist name"
            onChange={handleChange}
          ></input>
        </div>
      </form>
      <div>
        <div className="modal-footer mt-4">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSumbit}
          >
            {modalContent}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyPlaylist;
