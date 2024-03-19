import './App.css';
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './Navbar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Footers from './pages/Footers';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      < Footers />
    </BrowserRouter>

  );
}

export default App;
// {/* <Home /> */}
// {/* <Footers /> */}
// {/*  */}
// <Route path="*" element={<NoPage />} />