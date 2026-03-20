import Full_Text from "../../../components/Full_Text";

const Careers_Hero = () => {
  return (
    <section className="bg-page">
      <div className="containerclass py-20 md:py-28">
        <div className="max-w-[720px] mx-auto text-center">
          <Full_Text
            containerStyle="flex-col justify-center items-center gap-6"
            tag={{ text: "CAREERS", style: "mx-auto" }}
            header={{
              text: "We’re hiring",
              type: "title",
              style:
                "font-semibold leading-[4.1rem] md:leading-[5rem] text-[52px] md:text-[64px]",
              extra: <span className="block">talented people</span>,
            }}
            para={{
              text: "We’re a remote team of designers, developers, and builders helping startups ship smarter.",
              style: "max-w-[38rem] mx-auto text-prigray",
            }}
          />

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-medium shadow-[0_18px_50px_rgba(27,31,32,0.18)]"
            onClick={() => {
              const el = document.getElementById("open-roles");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            View positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers_Hero;
