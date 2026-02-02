import type { ITag } from "../types/types";

const Tag = ({ text, style }: ITag) => {
  return (
    <div
      className={`bg-white w-fit rounded-full border border-bd2 px-4 py-2 ${style}`}
    >
      <p className="text-primary">{text}</p>
    </div>
  );
};

export default Tag;
