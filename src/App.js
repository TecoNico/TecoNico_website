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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Announcement />} />
        <Route exact path="/1" element={<S1Route />} />
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
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
