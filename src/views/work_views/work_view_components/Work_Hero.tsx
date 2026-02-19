import Full_Text from "../../../components/Full_Text";

const Work_Hero = () => {
  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-4"
          tag={{ text: "portfolio", style: "mx-auto" }}
          header={{
            text: "Our design record",
            type: "title",
            style: "font-semibold max-w-[35rem] text-center leading-[5rem]",
          }}
          para={{
            text: "Explore a few of the designs we’ve helped bring to market — with creativity, clarity, and speed.",
            style: "max-w-[30rem] text-center text-base",
          }}
        />
      </div>
    </section>
  );
};

export default Work_Hero;
