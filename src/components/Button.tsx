import Direction from "../assets/svgs/Direction";
import type { IBtn } from "../types/types";

const Button = ({ text, style, color, show_icon = true }: IBtn) => {
  return (
    <button
      className={`flex gap-4 px-4 py-3 items-center rounded-full text-sm font-medium ${style}`}
    >
      {text} {show_icon && <Direction color={color} />}
    </button>
  );
};

export default Button;
