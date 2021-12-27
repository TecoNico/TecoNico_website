import Blog from "../../components/Blog/Blog";
import Nav2 from "../../components/Navbar/Nav2";
import "./style.css";
const index = () => {
  return (
    <>
      <Nav2 />
      <section className="Blogs">
        <div className="blog-head">
          <h1>Welcome to Teconico</h1>
        </div>
        <div className="feeds">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <hr id="dotted1" />
        <hr id="dotted" />
        <div className="blog-head">
          <h1>More from us</h1>
        </div>
        <div className="feeds">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </section>
    </>
  );
};

export default index;
