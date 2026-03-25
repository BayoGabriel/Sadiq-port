import { Phone } from "../../../assets/images";
import Lazy_Image from "../../../components/Lazy_Image";

const Per_Work_Hero = () => {
  return (
    <section className="containerclass py-20">
      <div className="bg-white p-2 rounded-xl">
        <Lazy_Image
          src={Phone}
          alt=""
          eager
          fetchPriority="high"
          wrapperClassName="w-full rounded-xl"
          className=" w-full object-cover rounded-xl max-h-130 block"
        />
      </div>
    </section>
  );
};

export default Per_Work_Hero;
