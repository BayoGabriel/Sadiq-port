import Button from "../../../components/Button";
import Card_Img from "../../../components/Card_Img";
import Full_Text from "../../../components/Full_Text";

const Service_Trusted = () => {
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
        <div className="grid gap-6 md:grid-cols-2 mt-20">
          {[1, 2, 3, 4].map((item, index) => (
            <Card_Img key={index} />
          ))}
        </div>

        <Button
          text="Let's talk"
          style="bg-linear-to-tr from-gradient1 to-gradient2 text-white mt-8 mx-auto"
          color="#ffffff"
        />
      </div>
    </section>
  );
};

export default Service_Trusted;
