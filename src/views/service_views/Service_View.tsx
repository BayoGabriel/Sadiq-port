import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Service_Hero from "./service_views_components/Service_Hero";
import Service_Second from "./service_views_components/Service_Second";
import Service_Trusted from "./service_views_components/Service_Trusted";

const Service_View = () => {
  return (
    <>
      <Nav_Bar />
      <Service_Hero />
      <Service_Second />
      <Service_Trusted />
      <Sub_Footer />
    </>
  );
};

export default Service_View;
