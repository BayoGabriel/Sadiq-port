import Footer from "../../components/Footer";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import About_Hero from "./about_view_component/About_Hero";
import About_Second from "./about_view_component/About_Second";
import About_Team from "./about_view_component/About_Team";

const About_View = () => {
  return (
    <>
      <Nav_Bar />
      <About_Hero />
      <About_Second />
      <About_Team />
      <Sub_Footer />
      <Footer />
    </>
  );
};

export default About_View;
