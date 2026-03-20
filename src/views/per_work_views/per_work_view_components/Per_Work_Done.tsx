import Full_Text from "../../../components/Full_Text";
import type { WorkItem } from "../../../data/work";

type PerWorkDoneProps = {
  workItem: WorkItem | undefined;
};

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.55 16.2 5.8 12.45l1.4-1.4 2.35 2.35 7.25-7.25 1.4 1.4-8.65 8.65Z" />
  </svg>
);

const Per_Work_Done = ({ workItem }: PerWorkDoneProps) => {
  const items = workItem?.whatWeDid ?? [
    "Designed clean, intuitive mobile flows for time tracking, tasks, and daily agendas",
    "Built a lightweight cross-platform app using React Native",
    "Integrated calendar sync, notifications, and offline mode",
    "Created a modular design system for future scale",
    "Helped define the product scope to avoid overbuilding",
  ];

  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col gap-4"
        tag={{ text: "WHAT WE DID", style: "" }}
        header={{
          text:
            workItem?.whatWeDidTitle ??
            "We delivered full UX/UI design and cross-platform development",
          type: "title",
          style: "font-semibold max-w-[58rem] leading-[4rem] md:leading-[5rem]",
        }}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((text) => (
          <div
            key={text}
            className="bg-white border border-bd2 rounded-2xl px-5 py-5 flex gap-4"
          >
            <div className="h-10 w-10 shrink-0 rounded-xl bg-page border border-bd2 grid place-items-center text-primary">
              <CheckIcon />
            </div>
            <p className="text-prigray text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Per_Work_Done;
