import Footer from "../../components/Footer";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Careers_Benefits from "./careers_view_components/Careers_Benefits";
import Careers_Hero from "./careers_view_components/Careers_Hero";
import Careers_Openings from "./careers_view_components/Careers_Openings";

const Careers_View = () => {
  return (
    <>
      <Nav_Bar />
      <Careers_Hero />
      <Careers_Benefits />
      <Careers_Openings />
      <Sub_Footer />
      <Footer />
    </>
  );
};

export default Careers_View;
