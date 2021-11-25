import video from '../../Assets/video/intro.mp4'
import Product from './Product';
// import About from './AboutUs';
import Video from '../../components/Video';
import Mission from './Mission';
import Team from './Team';
const Home = () => {
  return (
    <div className="home">
        <video className='video' src={video} autoPlay loop muted/>
        <Product />
        {/* <About /> */}
        <Mission />
        <Video />
        <Team />
    </div>
  );
};

export default Home;
