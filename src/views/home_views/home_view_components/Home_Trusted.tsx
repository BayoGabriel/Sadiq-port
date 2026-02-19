import Card_Img from "../../../components/Card_Img";
import Full_Text from "../../../components/Full_Text";

const Home_Trusted = () => {
  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center"
          tag={{ text: "portfolio", style: "mx-auto" }}
          header={{
            text: "Trusted by startups to scale fast ",
            type: "title",
            style: "font-semibold max-w-[35rem] text-center leading-[5rem]",
          }}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card_Img key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_Trusted;
