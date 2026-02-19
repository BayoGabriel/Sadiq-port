import type { IFullText } from "../types/types";
import Button from "./Button";
import Header_Text from "./Header_Text";
import Paragraph from "./Paragraph";
import Tag from "./Tag";

const Full_Text = ({ tag, header, para, containerStyle, btn }: IFullText) => {
  return (
    <div className={`flex ${containerStyle}`}>
      {tag && <Tag {...tag} />}
      {header && <Header_Text {...header} />}
      {para && <Paragraph {...para} />}
      {btn && <Button {...btn} />}
    </div>
  );
};

export default Full_Text;
