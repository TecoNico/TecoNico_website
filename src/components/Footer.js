import logo from "../Assets/img/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h3>TecoNico</h3>
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <h2 style={{ color: "white" }}>UseFull Links</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Idea Incubation</a>
          </li>
          <li>
            <a href="/">Shahi Mandi</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h2 style={{ color: "white" }}>Contact Us</h2>
        <p>Phone: +91 8619131789 </p>
        <p>Email : teconicopvtltd@gmail.com</p>
        <p>Social Media</p>
      </div>
    </div>
  );
};

export default Footer;
