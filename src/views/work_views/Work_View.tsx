import { useState } from "react";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Work_Hero from "./work_view_components/Work_Hero";
import Work_List from "./work_view_components/Work_List";
import Work_Help from "./work_view_components/Work_Help";

const Work_View = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  return (
    <>
      <Nav_Bar />
      <Work_Hero activeTab={activeTab} onChangeTab={setActiveTab} />
      <Work_List activeTab={activeTab} />
      <Work_Help />
      <Sub_Footer />
    </>
  );
};

export default Work_View;
