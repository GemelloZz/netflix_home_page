import "./App.css";
import Navbar from "./component/MyNavbar";
import TvShows from "./component/MyMain";
import Footer from "./component/Myfooter";
import Movie from "./component/Movie";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <TvShows />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
