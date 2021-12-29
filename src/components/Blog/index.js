import Blog from "./Blog";
import Nav2 from "../Navbar/Nav2";
import teconico from "../../Assets/images/logo.jpg";
import { ElfsightWidget } from "react-elfsight-widget";
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
          <ElfsightWidget widgetID="67455506-f879-4668-932c-7de7286b6ad7" />
        </div>
        <hr id="dotted1" />

        <h1 align="center">Medium Posts </h1>
        <div className="grid-container">
          <ElfsightWidget widgetID="043c5bbb-6ef7-4662-ab7a-164e7fb80b66" />
        </div>
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
