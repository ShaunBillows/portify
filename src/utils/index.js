import { changeToken } from "./helpers";

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
          username: "shaun",
          pass: "shaunssupersecretpassword",
        }),
      });
      const data = await response.json();
      console.log(data);
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
      console.log(error);
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
      return 1;
    } catch (error) {
        setUser("");
        changeToken(setCookie, "");
        setIsLoggedIn(false);
      console.log(error);
      return 0;
    }
  };

  export const createPlaylist = async (
    title,
    playlist,
    cookies,
    setUser
  ) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/playlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies.token,
        },
        body: JSON.stringify({
          title: title,
          playlist: playlist,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw new Error("Incorred credentials.");
      }
      setUser(data.user.user);
      return 1;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  