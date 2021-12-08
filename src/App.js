import Introduce from "./components/Introduce/Introduce";
import Nav from "./components/Navbar/Nav";
import Ourvision from "./components/OurVision/Ourvision";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <Nav />
      {/* <Yo /> */}
      <Introduce />
      <Ourvision />
      <Team />
    </>
  );
}
export default App;
