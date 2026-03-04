import Sub_Footer from "../../components/Sub_Footer";
import Home_Hero from "./home_view_components/Home_Hero";
import Home_Trusted from "./home_view_components/Home_Trusted";
import Work from "./home_view_components/Work";

const Home_View = () => {
  return (
    <>
      <Home_Hero />
     
      <Work />
      <Home_Trusted />

      <Sub_Footer />
    </>
  );
};

export default Home_View;
