import type { ReactNode } from "react";
import type { IHeader, IText, Text_Type } from "../types/types";

const Header_Text = ({ text, type, extra, style }: IHeader) => {
  const texts: Record<Text_Type, ReactNode> = {
    title: <Title_Head text={text} extra={extra} style={style} />,
    subhead: <Sub_Head text={text} extra={extra} style={style} />,
    cardhead: <Card_Head text={text} extra={extra} style={style} />,
  };
  return <>{texts[type]}</>;
};

export default Header_Text;

const Title_Head = ({ text, extra, style }: IText) => {
  return (
    <h1 className={`text-primary text-[64px] ${style}`}>
      {text} {extra}
    </h1>
  );
};

const Sub_Head = ({ text, extra, style }: IText) => {
  return (
    <h2 className={`text-primary text-[48px] ${style}`}>
      {text} {extra}
    </h2>
  );
};

const Card_Head = ({ text, extra, style }: IText) => {
  return (
    <h4 className={`text-primary text-[20px] ${style}`}>
      {text} {extra}
    </h4>
  );
};
