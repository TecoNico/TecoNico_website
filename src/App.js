import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/announcement/index";
import HealthCare from "./pages/healthcare";
import HomeAutomation from "./pages/homeautomation/index";
import S1Route from "./pages/demopage/s1route";
import Team from "./components/Team/Team";
import Blog from "./pages/blog/index";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Announcement />} />
        <Route exact path="/1" element={<S1Route />} />
        <Route exact path="/family" element={<Team />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/healthcare" element={<HealthCare />} />
        <Route exact path="/homeautomation" element={<HomeAutomation />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
