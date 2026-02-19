import type { IPara } from "../types/types";

const Paragraph = ({ text, style }: IPara) => {
  return <p className={`${style ? style : "text-prigray"}`}>{text}</p>;
};

export default Paragraph;
