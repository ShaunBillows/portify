import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const TracksItem = ({
  track,
  index,
  setTracks,
  tracks,
  editPlaylist,
  setSelectedPlaylist,
  selectedPlaylist,
}) => {
  const [selected, setSelected] = useState(false);
  const [input, setInput] = useState("");

  const handleSelect = () => {
    setSelected(!selected);
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter" && input) {
      setTracks(
        tracks.map((x) =>
          x.name === track.name
            ? {
                name: track.name,
                artist: track.artist,
                genre: input,
                url: track.url,
                uri: track.uri,
              }
            : x
        )
      );
      const updatedPlaylist = selectedPlaylist;
      updatedPlaylist.playlist = updatedPlaylist.playlist.map((x) =>
        x.name === track.name
          ? {
              name: track.name,
              artist: track.artist,
              genre: input,
              url: track.url,
              uri: track.uri,
            }
          : x
      );
      setSelectedPlaylist(updatedPlaylist);
      setSelected(false);
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteTrack = () => {
    setTracks(tracks.filter((x) => x.name !== track.name));
    const updatedPlaylist = selectedPlaylist;
    updatedPlaylist.playlist = updatedPlaylist.playlist.filter(
      (x) => x.name !== track.name
    );
    setSelectedPlaylist(updatedPlaylist);
  };

  return (
    <>
      <td scope="col">{index + 1}</td>
      <td scope="col">{track.name}</td>
      <td scope="col">{track.artist}</td>
      <td scope="col">
        {selected ? (
          <div class="input-group input-group-sm mt-1">
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={input}
              placeholder="Select genre"
              onKeyDown={handleKeydown}
              onChange={handleChange}
            ></input>
          </div>
        ) : (
          track.genre
        )}
      </td>
      {editPlaylist && (
        <>
          <td scope="col">
            <a
              href={track.url}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {track.url}
            </a>
          </td>
          <td scope="col">
            <div class=" d-flex justify-content-center align-items-center p-1 mt-1">
              <FontAwesomeIcon
                onClick={handleSelect}
                icon={faPenToSquare}
                style={{ cursor: "pointer" }}
              />
            </div>
          </td>
          <td scope="col">
            <div class=" d-flex justify-content-center align-items-center p-1 mt-1">
              <FontAwesomeIcon
                onClick={handleDeleteTrack}
                icon={faCircleXmark}
                style={{ cursor: "pointer" }}
              />
            </div>
          </td>
        </>
      )}
    </>
  );
};

export default TracksItem;
