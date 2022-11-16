import Dropdown from "../components/Dropdown";

const SelectGenre = ({
  genres,
  setTracks,
  selectedPlaylist,
  setPage,
  setEditPlaylist,
}) => {
  const handleSelectGenre = (option) => {
    if (option.label === "All") {
      setTracks(selectedPlaylist.playlist);
    } else {
      setTracks(
        selectedPlaylist.playlist.filter((x) => x.genre === option.label)
      );
    }
    setPage(1);
    setEditPlaylist(false);
  };

  return (
    <>
      <label
        className=" me-1 mb-1 m-0 p-0"
        style={{ fontWeight: "700", color: "black", letterSpacing: "0.03rem" }}
      >
        Filter by genre
      </label>
      {genres.length > 0 ? (
        <div className="d-flex justify-content-end align-items-center  mt-0">
          <div className="" style={{ maxWidth: "300", width: "100%" }}>
            <Dropdown
              options={genres}
              text={"Select genre"}
              func={handleSelectGenre}
              color={"#212121"}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SelectGenre;
