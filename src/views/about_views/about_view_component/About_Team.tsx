import { useState } from "react";
import { Sadiq, Vicki, Sadiq2, Gabriel } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const About_Team = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Sadiq",
      position: "CEO/Product Designer",
      image: Sadiq,
    },
    {
      name: "Sadiq",
      position: "Project Manager",
      image: Sadiq2,
    },
    {
      name: "Vicki",
      position: "Software Engineer",
      image: Vicki,
    },
    {
      name: "Gabriel",
      position: "Software Engineer/Infra/Devops",
      image: Gabriel,
    },
  ];

  return (
    <section>
      <div className="containerclass py-20 grid gap-4">
        <Full_Text
          containerStyle="flex-col gap-4"
          tag={{ text: "Team", style: "" }}
          header={{
            text: "Meet our team",
            type: "title",
            style: "font-semibold leading-[5rem]",
          }}
          para={{
            text: "We’re a small, senior team of designers, developers, and product thinkers. No bloated layers. No filler. Just real people who know how to ship.",
            style: "max-w-[30rem] text-base text-prigray",
          }}
        />

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col h-full max-h-[500px] cursor-pointer group"
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              <div className="relative flex-1 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center px-4 transition-opacity duration-300 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <p className="text-sm font-medium">
                    {member.position}
                  </p>
                </div>
              </div>

              <p className="mt-3 font-semibold text-center">
                {member.name}
              </p>
            </div>
          ))}
        </div>

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
              "bg-white linear-to-tr from-gradient1 to-gradient2 text-primary mt-8",
            show_icon: false,
          }}
        />
      </div>
    </section>
  );
};

export default About_Team;