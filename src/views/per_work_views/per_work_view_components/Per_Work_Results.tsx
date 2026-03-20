import Full_Text from "../../../components/Full_Text";
import type { WorkItem } from "../../../data/work";

type PerWorkResultsProps = {
  workItem: WorkItem | undefined;
};

const Per_Work_Results = ({ workItem }: PerWorkResultsProps) => {
  if (!workItem) return null;

  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col gap-6"
          tag={{ text: workItem.resultsTag, style: "" }}
          header={{
            text: workItem.resultsTitle,
            type: "title",
            style:
              "font-semibold max-w-[80rem] leading-[4rem] md:leading-[5rem] text-[52px] md:text-[64px]",
          }}
        />
      </div>
    </section>
  );
};

export default Per_Work_Results;
