import { useState } from "react";
import Dropdown from "./Dropdown";
import { mergePlaylists } from "../utils";

const MergePlaylists = ({
  playlists,
  closeModal,
  cookies,
  setUser,
  modalContent,
  setEditPlaylist,
  setPage,
}) => {
  const [input, setInput] = useState("");
  const [playlistsToMerge, setPlaylistsToMerge] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSumbit = async () => {
    if (!input || playlistsToMerge.length < 2) {
      return;
    }
    if (playlists.some((x) => x.name === input)) {
      alert("You already have a playlist with that name.");
    }
    const status = await mergePlaylists(
      input,
      playlists.filter((x) => playlistsToMerge.includes(x.name)),
      cookies,
      setUser
    );
    if (status !== 200) {
      alert("An error occured.");
    }
    closeModal();
    setEditPlaylist(false);
    setPage(1);
  };

  const handleSelectPlaylist = (option) => {
    setPlaylistsToMerge([...playlistsToMerge, option.label]);
  };

  return (
    <div className=" d-flex flex-column ">
      <form class="form-inline  px-2 mt-4">
        <div className="form-group mx-sm-3 mb-2">
          <p className="" style={{ maxWidth: "270px" }}>
            Selected playlists will be merged into a new playlist.
          </p>
        </div>
        <div class="form-group mx-sm-3 mb-3">
          <label class=" mb-1">Select a playlist name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Playlist name"
            onChange={handleChange}
          ></input>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label class=" mb-1">Select playlists to merge</label>
          <Dropdown
            options={playlists.map((x) => x.name)}
            func={handleSelectPlaylist}
            color={"white"}
          />
        </div>
        {playlistsToMerge.length ? (
          <div class="form-group mx-sm-3 mb-2 b-2">
            <label class=" mb-2">Merging playlists:</label>
            <div className="d-flex flex-column justify-content-center ">
              {playlistsToMerge.map((playlist, i) => (
                <li key={i} class="">
                  {playlist}
                </li>
              ))}
            </div>
          </div>
        ) : null}
        <div className="modal-footer mt-4 ">
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
      </form>
    </div>
  );
};

export default MergePlaylists;
