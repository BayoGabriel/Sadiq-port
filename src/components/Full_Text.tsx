import type { IFullText } from "../types/types";
import Header_Text from "./Header_Text";
import Tag from "./Tag";

const Full_Text = ({ tag, header, containerStyle }: IFullText) => {
  return (
    <div className={`flex ${containerStyle}`}>
      {tag && <Tag {...tag} />}
      {header && <Header_Text {...header} />}
    </div>
  );
};

export default Full_Text;
