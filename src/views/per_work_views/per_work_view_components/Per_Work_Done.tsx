import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const Per_Work_Done = () => {
  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col  gap-4"
        tag={{ text: "WHAT WE DID", style: "" }}
        header={{
          text: "We delivered full UX/UI design and cross-platform development",
          type: "title",
          style: "font-semibold max-w-[58rem] leading-[5rem]",
        }}
      />
      <div className="bg-white p-1 rounded-xl mt-12">
        <img
          src={Phone}
          alt=""
          className=" w-full object-cover rounded-xl max-h-130 block"
        />
      </div>
    </section>
  );
};

export default Per_Work_Done;
