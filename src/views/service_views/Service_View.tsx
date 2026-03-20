import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Service_Hero from "./service_views_components/Service_Hero";
import Service_Second from "./service_views_components/Service_Second";
import Service_Trusted from "./service_views_components/Service_Trusted";

type ServiceViewProps = {
  title?: string;
  description?: string;
};

const Service_View = ({ title, description }: ServiceViewProps) => {
  return (
    <>
      <Nav_Bar />
      <Service_Hero title={title} description={description} />
      <Service_Second />
      <Service_Trusted />
      <Sub_Footer />
    </>
  );
};

export default Service_View;
