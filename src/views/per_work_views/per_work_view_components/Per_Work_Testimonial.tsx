import Full_Text from "../../../components/Full_Text";
import type { WorkItem } from "../../../data/work";

type PerWorkTestimonialProps = {
  workItem: WorkItem | undefined;
};

const Per_Work_Testimonial = ({ workItem }: PerWorkTestimonialProps) => {
  if (!workItem?.testimonial) return null;

  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-4"
          tag={{ text: "TESTIMONIAL", style: "mx-auto" }}
          header={{
            text: "Real feedback from",
            type: "subhead",
            style: "font-semibold max-w-[35rem] text-center leading-[3.2rem] md:leading-[5rem]",
            extra: <span className="block">this client</span>,
          }}
        />

        <div className="mt-12 max-w-[520px] mx-auto rounded-2xl bg-white border border-bd2 shadow-[0_18px_50px_rgba(27,31,32,0.08)] p-6">
          <p className="text-prigray leading-relaxed">“{workItem.testimonial.quote}”</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-page border border-bd2" />
            <div>
              <p className="text-primary font-medium text-sm">{workItem.testimonial.name}</p>
              <p className="text-secgray text-xs">{workItem.testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Per_Work_Testimonial;
