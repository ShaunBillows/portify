export const changeToken = (setCookie, token) => {
    setCookie("token", token, {
      path: "/",
    });
  };
  