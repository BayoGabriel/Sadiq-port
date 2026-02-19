import Card_Img from "../../../components/Card_Img";

const Work_List = () => {
  return (
    <section className="containerclass py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Card_Img key={index} />
        ))}
      </div>
    </section>
  );
};

export default Work_List;
