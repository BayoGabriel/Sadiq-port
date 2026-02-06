import Full_Text from "../../../components/Full_Text";
import Card_Img from "../../../components/Card_Img";
import Button from "../../../components/Button";

const Per_Work_More = () => {
  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col justify-center items-center gap-4"
        tag={{ text: "portfolio", style: "mx-auto" }}
        header={{
          text: "More projects",
          type: "subhead",
          style: "font-semibold max-w-[35rem] text-center leading-[5rem]",
        }}
      />
      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {[1, 2, 3, 4].map((item, index) => (
          <Card_Img key={index} />
        ))}
      </div>
      <Button
        style="bg-linear-to-tr from-gradient1 to-gradient2 text-white mt-8 w-fit mx-auto"
        color="#ffffff"
        text="View all work"
        show_icon={false}
      />
    </section>
  );
};

export default Per_Work_More;
