import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Tickets from "./pages/Tickets";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import PastEvents from "./pages/PastEvents";
import Welfare from "./pages/Welfare";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <div className="h-24 bg-zinc-950 flex flex-col">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pastevents" element={<PastEvents />} />
          <Route path="/welfare" element={<Welfare />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
