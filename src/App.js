import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Cart from "./Pages/Cart/Cart";
import Notfound from "./Pages/Notfound/Notfound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <PrivateRoute>
                <Home></Home>
              </PrivateRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home></Home>
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<Notfound></Notfound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
