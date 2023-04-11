import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import FavouritesCities from "./components/FavouritesCities";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityFromFav from "./components/CityFromFav";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/favourites" element={<FavouritesCities></FavouritesCities>} />
          <Route path="/:city" element={<CityFromFav />} />
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <MyFooter />
      </>
    </BrowserRouter>
  );
}

export default App;
