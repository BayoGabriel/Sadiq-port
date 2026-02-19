import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const Per_Work_Details = () => {
  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col  gap-4"
        tag={{ text: "CASE STUDY", style: "" }}
        header={{
          text: "LodaPoint – A mobile-first productivity app built for Truck, Ride, & Bike Hailing.",
          type: "title",
          style: "font-semibold max-w-[70rem] leading-[5rem]",
        }}
      />
      <div className="bg-white p-1 rounded-xl mt-12">
        <img
          src={Phone}
          alt=""
          className=" w-full object-cover rounded-xl max-h-130 block"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-2 mt-2">
        {[1, 2].map((index) => (
          <div className="bg-white p-1 rounded-xl" key={index}>
            <img src={Phone} alt="" className=" w-full rounded-xl block" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Per_Work_Details;
