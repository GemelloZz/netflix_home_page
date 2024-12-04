import "./App.css";
import Navbar from "./component/MyNavbar";
import TvShows from "./component/MyMain";
import Footer from "./component/Myfooter";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Griffin from "./component/Thegriffin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<TvShows />} />
          <Route path="/Griffin" element={<Griffin />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
