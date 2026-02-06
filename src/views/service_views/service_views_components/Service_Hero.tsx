import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const Service_Hero = () => {
  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col justify-center items-center mb-10"
        tag={{ text: "Services", style: "mx-auto" }}
        header={{
          text: "Mobile development",
          type: "subhead",
          style: "font-semibold max-w-[35rem] text-center leading-[5rem]",
        }}
        para={{
          text: "Mobile apps built for speed and scale.",
          style: "max-w-[40rem]",
        }}
      />
      <div className="bg-white p-2 rounded-xl">
        <img
          src={Phone}
          alt=""
          className=" w-full object-cover rounded-xl max-h-130 block"
        />
      </div>
    </section>
  );
};

export default Service_Hero;
