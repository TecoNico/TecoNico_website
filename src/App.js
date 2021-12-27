import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/announcement/index";
import HealthCare from "./pages/healthcare";
import HomeAutomation from "./pages/homeautomation/index";
import S1Route from "./pages/demopage/s1route";

import Team from "./components/Team/Team";
import Blog from "./pages/blog/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Announcement />} />
        <Route exact path="/1" element={<S1Route />} />
        {/* <Route exact path="/2" element={<S2Route />} />
        <Route exact path="/3" element={<S3Route />} />
        <Route exact path="/4" element={<S4Route />} /> */}
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/healthcare" element={<HealthCare />} />
        <Route exact path="/homeautomation" element={<HomeAutomation />} />
      </Routes>
    </Router>
  );
}
export default App;
