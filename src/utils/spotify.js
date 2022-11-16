export const createSpotifyPlaylist = async (
  name,
  spotifyUserId,
  spotifyToken
) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${spotifyToken}`,
        },
        body: JSON.stringify({
          name: name,
          public: false,
          description: "New playlist description",
        }),
      }
    );
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
};

export const addTracksToSpotifyPlaylist = async (
  playlist_uri,
  spotifyToken,
  uris
) => {
  try {
    let offset = 0;

    while (offset < uris.length) {
      let uriLimit = uris.slice(offset, offset + 100);

      let response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlist_uri}/tracks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${spotifyToken}`,
          },
          body: JSON.stringify({
            uris: uriLimit,
          }),
        }
      );
      console.log(response.status);
      await setTimeout(() => {}, 1000);
      offset += 100;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
