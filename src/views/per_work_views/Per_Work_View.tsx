// import React from "react";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Per_Work_Hero from "./per_work_view_components/Per_Work_Hero";
import Per_Work_More from "./per_work_view_components/Per_Work_More";
import Per_Work_Details from "./per_work_view_components/Per_Work_Details";
import Per_Work_Done from "./per_work_view_components/Per_Work_Done";

const Per_Work_View = () => {
  return (
    <>
      <Nav_Bar />
      <Per_Work_Hero />
      <Per_Work_Details />
      <Per_Work_Done />
      <Per_Work_More />
      <Sub_Footer />
    </>
  );
};

export default Per_Work_View;
