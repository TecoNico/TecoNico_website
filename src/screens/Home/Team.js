import neeraj from '../../Assets/img/people/neeraj.jpeg'
import yadav from '../../Assets/img/people/yadav.jpeg'
const Team = () => {
    return ( 
        <div id="home-team">
            <h2 style={{textAlign:'center'}}>Team</h2>
            <p style={{textAlign:'center'}}>Our Team is big but below are main factors of TecoNico</p>
            <div id="members-home">
                <div className="member">
                    <img src={neeraj} alt="" />
                </div>
                <div className="member">
                <img src={yadav} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Team;
