import Nav2 from "../Navbar/Nav2";
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
          <div className="remover"></div>
        </div>
        <hr id="dotted1" />
        <h1 align="center">Medium Posts </h1>
        <div className="Medium">
          <ElfsightWidget widgetID="54b346a7-31b8-43d6-b764-4189f52e339a" />
        </div>
        <hr id="dotted" />
        <h1 align="center">YouTube Posts </h1>

        <div className="Youtube">
          <ElfsightWidget widgetID="6215b853-db9d-402f-adc0-5711bcb6d1e6" />
        </div>
        <hr id="dotted" />
        <h1 align="center">Tweeter Posts </h1>

        <div className="Tweeter">
          <ElfsightWidget widgetID="5e3340c0-bbf5-46b0-8b37-d02a55405810" />
        </div>
      </section>
    </>
  );
};

export default index;
