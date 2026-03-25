import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";
import Paragraph from "../../../components/Paragraph";
import type { WorkItem } from "../../../data/work";
import Lazy_Image from "../../../components/Lazy_Image";

type PerWorkDetailsProps = {
  workItem: WorkItem | undefined;
};

const Per_Work_Details = ({ workItem }: PerWorkDetailsProps) => {
  const tags = workItem?.tags ?? ["Product Strategy", "UX/UI Design"];

  return (
    <section className="containerclass py-20">
      <Full_Text
        containerStyle="flex-col gap-4"
        tag={{ text: "CASE STUDY", style: "" }}
        header={{
          text:
            workItem?.title ??
            "BoldApp – A mobile-first productivity Fin-tech app with futuristic features.",
          type: "title",
          style: "font-semibold max-w-[72rem] leading-[4rem] md:leading-[5rem]",
        }}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
        <div>
          <p className="text-primary font-medium">Description</p>
          <Paragraph
            text={
              workItem?.description ??
              "A product experience built with clarity, speed, and scale in mind."
            }
            style="text-prigray mt-3 leading-relaxed"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((t) => (
              <div
                key={t}
                className="rounded-full px-3 py-1 bg-white border border-bdmain"
              >
                <p className="text-sm text-prigray">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <p className="text-secgray text-sm">Client</p>
            <p className="text-primary font-medium">
              {workItem?.client ?? "—"}
            </p>
          </div>
          <div>
            <p className="text-secgray text-sm">Date</p>
            <p className="text-primary font-medium">{workItem?.date ?? "—"}</p>
          </div>
          <div>
            <p className="text-secgray text-sm">Industry</p>
            <p className="text-primary font-medium">
              {workItem?.industry ?? "—"}
            </p>
          </div>
          <div>
            <p className="text-secgray text-sm">Timeline</p>
            <p className="text-primary font-medium">
              {workItem?.timeline ?? "—"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-xl mt-12">
        <Lazy_Image
          src={Phone}
          alt=""
          wrapperClassName="w-full rounded-xl"
          className="w-full object-cover rounded-xl max-h-130 block"
        />
      </div>
    </section>
  );
};

export default Per_Work_Details;
