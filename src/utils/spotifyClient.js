export const createSpotifyPlaylist = async (name, spotifyUserId, spotifyToken) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${spotifyUserId}/playlists`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${spotifyToken}`
            },
            body: JSON.stringify({
                "name": name,
                "public": false,
                "description": "New playlist description"
            }),
          });
        const data = await response.json();
        console.log(data);
        console.log(response.status);
        console.log(data.id);
        return response.status
    } catch (error) {
        console.log(error);
    }
}

export const addTracksToSpotifyPlaylist = async (name, playlist_uri, spotifyToken, uris) => {
    try {
        const offset = 0

        while (offset < uris.length) {

            let position = uris.slice( offset, offset + 100 ).join(", ")
            let response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_uri}/tracks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${spotifyToken}`
                },
                body: JSON.stringify({
                    "name": name
                }),
              });
            let data = await response.json();
            console.log(data);
            console.log(response.status);
        }
        return true
    } catch (error) {
        console.log(error);
    }
}