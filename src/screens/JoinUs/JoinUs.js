import career from '../../Assets/img/career.jpg'
import idea from '../../Assets/img/idea_incub.jpg'
import { Button } from 'react-bootstrap';
const JoinUs = () => {
  return (
    <div className="join-us">
      <h2 style={{textAlign:'center'}}>Career</h2>
      <p style={{textAlign:'center'}}>
        We provide a lot of career opportunities in every field of the company.
        We not only promote gems and talents, but we also promote passion. We
        believe that the most difficult tasks can also be achieved with a bit
        less knowledge but with firm determination and passion. So, here if you
        have all these qualities and a good personality you can seek a career in
        our company.
      </p>
      <img src={career} alt="" style={{width:'20vw',borderRadius:'5%',marginLeft:'35vw'}} />
      <Button variant="primary" className="btn" id="submit-join" style={{marginLeft: '42vw' ,  marginTop:'2vh'}}>Primary</Button>{' '}
      <h2 style={{textAlign:'center', paddingTop:'5vh'}}>Ideas Incubatiom</h2>
      <img src={idea} alt="" style={{width:'20vw',borderRadius:'5%',marginLeft:'35vw'}} />
      <Button variant="primary" className="btn" id="submit-join" style={{marginLeft: '42vw' ,  marginTop:'2vh'}}>Primary</Button>{' '}
    </div>
    
  );
};

export default JoinUs;