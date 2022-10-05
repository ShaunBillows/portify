import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Add from "./pages/Add";
import Create from "./pages/Create";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} >
        </Route>
        <Route path='/create' element={<Create/>} >
        </Route>
        <Route path='/add' element={<Add/>} >
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
