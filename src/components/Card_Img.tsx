import { Phone } from "../assets/images";
import Header_Text from "./Header_Text";
import Paragraph from "./Paragraph";

const Card_Img = () => {
  return (
    <div className="bg-white p-2 rounded-xl">
      <img src={Phone} alt="phone" />
      <div className="p-4 flex flex-col gap-4">
        <Header_Text text="Currency" type="cardhead" style="font-semibold" />
        <div className="flex gap-4">
          {[1, 2, 3].map((index) => (
            <div
              className="rounded-full px-3 py-1 bg-white border border-bdmain"
              key={index}
            >
              <Paragraph text="Mobile app" style="text-sm text-prigray" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card_Img;
