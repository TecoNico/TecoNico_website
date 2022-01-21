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
import Attendence from "./pages/Attendence/index";
import Drowsiness from "./pages/Drowsiness/index";

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
        <Route
          exact
          path="/blog"
          element={
            <Fragment>
              {/* <Nav2 /> */}
              <Blog />
            </Fragment>
          }
        />
        <Route exact path="/healthcare" element={<HealthCare />} />
        <Route exact path="/homeautomation" element={<HomeAutomation />} />
        <Route exact path="/attendencesystem" element={<Attendence />} />
        <Route exact path="/Drowsiness" element={<Drowsiness />} />
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
export default App;
