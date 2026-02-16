import { RectBg } from "../../assets/images";
import Full_Text from "../../components/Full_Text";
import Header_Text from "../../components/Header_Text";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Work_Hero from "./work_view_components/Work_Hero";
import Work_List from "./work_view_components/Work_List";

const Work_View = () => {
  return (
    <>
      <Nav_Bar />
      <Work_Hero />
      <Work_List />
      <Sub_Footer />
    </>
  );
};

export default Work_View;
