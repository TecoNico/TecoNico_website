import intro1 from '../Assets/video/Intro1.mp4'

const Video = () => {
  return (
    <div className="preview">
        <video className='vid' src={intro1} autoPlay loop muted />

    </div>
  );
};

export default Video;
