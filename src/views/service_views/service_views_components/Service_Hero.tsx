import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";
import Lazy_Image from "../../../components/Lazy_Image";

type ServiceHeroProps = {
  title?: string;
  description?: string;
};

const Service_Hero = ({
  title = "Mobile development",
  description = "Mobile apps built for speed and scale.",
}: ServiceHeroProps) => {
  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col justify-center items-center mb-10"
        tag={{ text: "Services", style: "mx-auto" }}
        header={{
          text: title,
          type: "subhead",
          style: "font-semibold max-w-[35rem] text-center leading-[5rem]",
        }}
        para={{
          text: description,
          style: "max-w-[40rem]",
        }}
      />
      <div className="bg-white p-2 rounded-xl">
        <Lazy_Image
          src={Phone}
          alt=""
          eager
          fetchPriority="high"
          wrapperClassName="w-full rounded-xl"
          className="w-full object-cover rounded-xl max-h-130 block"
        />
      </div>
    </section>
  );
};

export default Service_Hero;
