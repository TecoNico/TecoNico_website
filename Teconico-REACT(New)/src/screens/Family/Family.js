
import neeraj from '../../Assets/img/people/neeraj.jpeg'
import yadav from '../../Assets/img/people/yadav.jpeg'
import disha from '../../Assets/img/people/disha.jpg'
// import gatwal from '../../Assets/img/people/gatwal.jpeg'
import shlok from '../../Assets/img/people/shlok.jpg'
import pranjal from '../../Assets/img/people/pranjal.jpeg'
import vaibhav from '../../Assets/img/people/vaibhav.jpg'
import vishwajeet from '../../Assets/img/people/vishwajeet.jpg'
import Yashodhar from '../../Assets/img/people/yashodhar.png'
import harshit from '../../Assets/img/people/harshit.jpeg'
const Family = () => {
  return (
    <div className="family">
      <h2 style={{ textAlign: "center" }}>Family</h2>
      <p style={{ textAlign: "center" , padding:'2vw'}}>
        Every secure building requires strong pillars. And as every support has
        its own role, here are our pillars with their assigned tasks, which they
        do with intense dedication. They are our family which co-ordinately
        supports our company.
      </p>
      <div className="card">
        <div className="card-item" style={{animationDelay:'1s'}}>
            <img src={neeraj}  alt="" />
        </div>
        <div className="card-item" style={{animationDelay:'6s'}}> 
            <img src={yadav}  alt="" />
        </div>
        <div className="card-item" style={{animationDelay:'11s'}}>
            <img src={disha}  alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
            <img src={vaibhav} alt="" />
        </div>
        <div className="card-item">
        <img src={shlok} alt="" />
        </div>
        <div className="card-item">
        <img src={Yashodhar} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
        <img src={vishwajeet} alt="" />
        </div>
        <div className="card-item">
        <img src={pranjal} alt="" />
        </div>
        <div className="card-item">
        <img src={harshit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Family;