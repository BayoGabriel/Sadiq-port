import type { IDoubleBtn } from "../types/types";
import Button from "./Button";

const Double_Btn = ({ btn1, btn2, style }: IDoubleBtn) => {
  return (
    <div className={`flex mx-auto gap-4 ${style}`}>
      <Button {...btn1} />
      <Button {...btn2} />
    </div>
  );
};

export default Double_Btn;
