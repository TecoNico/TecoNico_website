import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./pages/announcement/index";
import HealthCare from "./pages/healthcare";
import HomeAutomation from "./pages/homeautomation/index";
import S1Route from "./pages/demopage/s1route";
import S2Route from "./pages/demopage/s2route";
import S3Route from "./pages/demopage/s3route";
import S4Route from "./pages/demopage/s4route";
import Team from "./components/Team/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Announcement />} />
        <Route exact path="/1" element={<S1Route />} />
        <Route exact path="/2" element={<S2Route />} />
        <Route exact path="/3" element={<S3Route />} />
        <Route exact path="/4" element={<S4Route />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/healthcare" element={<HealthCare />} />
        <Route exact path="/homeautomation" element={<HomeAutomation />} />
      </Routes>
    </Router>
  );
}
export default App;
