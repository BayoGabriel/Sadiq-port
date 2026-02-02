import type { ReactNode } from "react";
import type { IHeader, IText, Text_Type } from "../types/types";

const Header_Text = ({ text, type }: IHeader) => {
  const texts: Record<Text_Type, ReactNode> = {
    title: <Title_Head {...text} />,
    subhead: <></>,
  };
  return <>{texts[type]}</>;
};

export default Header_Text;

const Title_Head = ({ text }: IText) => {
  return <h1 className="text-primary text-[64px]">{text}</h1>;
};
