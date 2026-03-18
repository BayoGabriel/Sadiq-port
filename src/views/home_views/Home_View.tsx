import Sub_Footer from "../../components/Sub_Footer";
import Home_Hero from "./home_view_components/Home_Hero";
import Home_Trusted from "./home_view_components/Home_Trusted";
import Work from "./home_view_components/Work";
import Home_Services from "./home_view_components/Home_Services";
import Home_Reads from "./home_view_components/Home_Reads";
import Home_Process from "./home_view_components/Home_Process";
import Home_About from "./home_view_components/Home_About";
import Home_Testimonials from "./home_view_components/Home_Testimonials";

const Home_View = () => {
  return (
    <>
      <Home_Hero />

      <Work />

      <Home_Trusted />
      <Home_Services />
      <Home_Process />
      <Home_About />
      <Home_Testimonials />
      <Home_Reads />

      <Sub_Footer />
    </>
  );
};

export default Home_View;
