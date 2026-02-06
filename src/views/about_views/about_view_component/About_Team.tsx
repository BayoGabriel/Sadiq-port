import { Woman } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const About_Team = () => {
  return (
    <section>
      <div className="containerclass py-20 grid gap-4">
        <Full_Text
          containerStyle="flex-col gap-4"
          tag={{ text: "Team", style: "" }}
          header={{
            text: "Meet our team",
            type: "title",
            style: "font-semibold  leading-[5rem]",
          }}
          para={{
            text: "We’re a small, senior team of designers, developers, and product thinkers. No bloated layers. No filler. Just real people who know how to ship.",
            style: "max-w-[30rem]  text-base text-prigray",
          }}
        />

        <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div>
              <img src={Woman} alt="" />
            </div>
          ))}
        </div>

        {/* <div className="containerclass"> */}
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-2 bg-primary py-20 rounded-xl mt-20"
          header={{
            text: "We’re hiring!",
            type: "subhead",
            style: "leading-[5rem] text-center font-semibold text-white",
          }}
          para={{
            text: "If you love solving real problems, moving quickly, and working on products that matter — we’d love to meet you.",
            style: "max-w-[30rem] text-center text-prigray text-base",
          }}
          btn={{
            text: "View positions",
            style:
              "bg-white inear-to-tr from-gradient1 to-gradient2 text-primary mt-8",
            show_icon: false,
          }}
        />
      </div>
    </section>
  );
};

export default About_Team;
