import { changeToken } from "./helpers";
import { createSpotifyPlaylist, addTracksToSpotifyPlaylist } from "./spotify";

export const login = async (
  username,
  password,
  setUser,
  setCookie,
  setIsLoggedIn
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        pass: password,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorred credentials.");
    }

    setUser(data.user.user);
    changeToken(setCookie, data.token);
    setIsLoggedIn(true);
    return 1;
  } catch (error) {
    setUser("");
    changeToken(setCookie, "");
    setIsLoggedIn(false);
    return 0;
  }
};

export const checkToken = async (
  cookies,
  setCookie,
  setUser,
  setIsLoggedIn
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorrect credentials.");
    }
    setUser(data.user.user);
    changeToken(setCookie, data.token);
    setIsLoggedIn(true);
  } catch (error) {
    setUser("");
    changeToken(setCookie, "");
    setIsLoggedIn(false);
  }
};

export const createPlaylist = async (title, playlist, cookies, setUser) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/playlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies.token,
        },
        body: JSON.stringify({
          title: title,
          playlist: playlist,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorred credentials.");
    }
    setUser(data.user);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const mergePlaylists = async (title, playlists, cookies, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/merge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
      body: JSON.stringify({
        title: title,
        playlists: playlists,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorred credentials.");
    }
    setUser(data.user);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const deletePlaylist = async (title, playlist, cookies, setUser) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/playlist`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies.token,
        },
        body: JSON.stringify({
          title: title,
          playlist: playlist,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorred credentials.");
    }
    setUser(data.user);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const updatePlaylist = async (title, newPlaylist, cookies, setUser) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/playlist`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies.token,
        },
        body: JSON.stringify({
          title: title,
          newPlaylist: newPlaylist,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error("Incorred credentials.");
    }
    setUser(data.user);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const uploadPlaylist = async (
  name,
  spotifyUserId,
  spotifyToken,
  uris
) => {
  const newPlaylistId = await createSpotifyPlaylist(
    name,
    spotifyUserId,
    spotifyToken
  );
  if (!newPlaylistId) {
    console.log("An error occured connecting to your spotify account.");
    return;
  }
  await setTimeout(async () => {
    const successfullyAdded = await addTracksToSpotifyPlaylist(
      newPlaylistId,
      spotifyToken,
      uris
    );
    if (!successfullyAdded) {
      return;
    }
  }, 1000);
  return true;
};
