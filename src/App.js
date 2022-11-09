import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Add from "./pages/Add";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { checkToken } from "./utils";
import Login from "./pages/Login";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cookies, setCookie] = useCookies(["token"]);
  const [user, setUser] = useState("");

  useEffect(() => {
    checkToken(cookies, setCookie, setUser, setIsLoggedIn);
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    setCookie(["token"])
    setUser("")
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <Routes>
      <Route path="/login" element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setCookie={setCookie}
              setUser={setUser}
            />
          }
        />
        <Route path='/' element={<Protected isLoggedIn={isLoggedIn}><Home logout={logout} user={user}
        /></Protected>} >
        </Route>
        <Route path='/create' element={<Protected isLoggedIn={isLoggedIn}><Create logout={logout} user={user} cookies={cookies} setUser={setUser}/></Protected>} >
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
