const PlaylistTable = ({
  playlists,
  setSelectedPlaylist,
  setGenres,
  setTracks,
  setPage,
  setEditPlaylist,
}) => {
  const handleClickPlaylist = async (playlistName) => {
    const selectedPlaylist = playlists.filter((x) => x.name === playlistName);
    setSelectedPlaylist(selectedPlaylist[0]);
    setGenres([
      "All",
      ...new Set(selectedPlaylist[0].playlist.map((x) => x.genre)),
    ]);
    setTracks(selectedPlaylist[0].playlist);
    setPage(1);
    setEditPlaylist(false);
  };

  return (
    <div className="table-responsive rounded">
      <table class="table table-hover table-dark" id="bootstrap-override">
        <thead>
          <tr>
            <th scope="col">Playlists</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((x, i) => (
            <tr key={i}>
              <td
                onClick={() => handleClickPlaylist(x.name)}
                style={{ cursor: "pointer" }}
              >
                {x.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaylistTable;
