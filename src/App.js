<<<<<<< HEAD
import Home from "./components/Home/Home";
import OurProduct from "./components/OurProduct/OurProduct";
import Why from "./components/Why we/Why";
import OurProduct2 from "./components/OurProduct/OurProduct2";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      <Why />
      <OurProduct />
      <OurProduct2 />
      <Contact />
    </div>
  );
}

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/announcement/index";
import HealthCare from "./pages/healthcare";
import HomeAutomation from "./pages/homeautomation/index";
import S1Route from "./pages/demopage/s1route";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/index";
import { Footer } from "./components/Footer/Footer";
import Nav2 from "./components/Navbar/Nav2";
import { Fragment } from "react";
import Contact from "./components/Contact-Us/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Announcement />} />
        <Route
          exact
          path="/1"
          element={
            <Fragment>
              <Nav2 />
              <S1Route />
            </Fragment>
          }
        />
        <Route
          exact
          path="/family"
          element={
            <Fragment>
              <Nav2 />
              <Team />
            </Fragment>
          }
        />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/healthcare" element={<HealthCare />} />
        <Route exact path="/homeautomation" element={<HomeAutomation />} />
        <Route
          exact
          path="/contact"
          element={
            <Fragment>
              <Nav2 />
              <Contact />
            </Fragment>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
>>>>>>> master
export default App;
