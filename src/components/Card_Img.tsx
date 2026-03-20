import { Phone } from "../assets/images";
import Header_Text from "./Header_Text";
import Paragraph from "./Paragraph";

type CardImgProps = {
  title?: string;
  tags?: string[];
};

const Card_Img = ({
  title = "Currency",
  tags = ["Mobile app", "Mobile app", "Mobile app"],
}: CardImgProps) => {
  return (
    <div className="bg-white p-2 rounded-xl">
      <img src={Phone} alt="phone" />
      <div className="p-4 flex flex-col gap-4">
        <Header_Text text={title} type="cardhead" style="font-semibold" />
        <div className="flex gap-4">
          {tags.slice(0, 3).map((tag, index) => (
            <div
              className="rounded-full px-3 py-1 bg-white border border-bdmain"
              key={index}
            >
              <Paragraph text={tag} style="text-sm text-prigray" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card_Img;
