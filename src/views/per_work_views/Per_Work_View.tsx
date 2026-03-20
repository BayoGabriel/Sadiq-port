import { useParams } from "react-router-dom";
import Nav_Bar from "../../components/Nav_Bar";
import Sub_Footer from "../../components/Sub_Footer";
import Per_Work_More from "./per_work_view_components/Per_Work_More";
import Per_Work_Details from "./per_work_view_components/Per_Work_Details";
import Per_Work_Done from "./per_work_view_components/Per_Work_Done";
import Per_Work_Testimonial from "./per_work_view_components/Per_Work_Testimonial";
import Per_Work_Results from "./per_work_view_components/Per_Work_Results";
import { getWorkItemById } from "../../data/work";

const Per_Work_View = () => {
  const { id } = useParams();
  const workItem = getWorkItemById(id);

  return (
    <>
      <Nav_Bar />
      <Per_Work_Details workItem={workItem} />
      <Per_Work_Done workItem={workItem} />
      <Per_Work_Testimonial workItem={workItem} />
      <Per_Work_Results workItem={workItem} />
      <Per_Work_More />
      <Sub_Footer />
    </>
  );
};

export default Per_Work_View;
