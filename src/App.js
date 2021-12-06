import Introduce from "./components/Introduce/Introduce";
import Nav from "./components/Navbar/Nav";
import Ourvision from "./components/OurVision/Ourvision";
import Pg1 from "./components/Pg1/Pg1";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <Nav />
      {/* <Pg1 /> */}
      <Introduce />
      <Ourvision />
      <Team />
    </>
  );
}
export default App;
