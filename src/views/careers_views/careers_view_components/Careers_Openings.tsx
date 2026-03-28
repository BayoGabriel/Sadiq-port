import { useMemo, useState } from "react";
import Full_Text from "../../../components/Full_Text";

type Role = {
  title: string;
  bullets: string[];
};

const Careers_Openings = () => {
  const roles = useMemo<Role[]>(
    () => [
      {
        title: "UX/UI Designer",
        bullets: [
          "Design wireframes, user flows, and high-fidelity mockups.",
          "Conduct user research and translate findings into design improvements.",
          "Work closely with developers to bring designs to life.",
          "Ensure consistency across brand visuals and digital products.",
          "Iterate designs based on testing and feedback.",
        ],
      },
      {
        title: "Product Designer",
        bullets: [
          "Own end-to-end design for key product areas.",
          "Create systemized UI patterns and scalable components.",
          "Partner with product and engineering on solution design.",
          "Validate concepts with quick prototypes and user feedback.",
        ],
      },
      {
        title: "Project Lead",
        bullets: [
          "Run delivery rituals and keep the team aligned on outcomes.",
          "Turn ambiguity into clear plans, scope, and milestones.",
          "Own stakeholder updates and remove delivery blockers.",
          "Keep quality high across design and engineering.",
        ],
      },
      {
        title: "Full-stack Developer",
        bullets: [
          "Build reliable features across frontend and backend.",
          "Ship clean, maintainable code with strong ownership.",
          "Collaborate with designers to implement polished UI.",
          "Improve performance, DX, and scalability.",
        ],
      },
    ],
    [],
  );

  const [openTitle, setOpenTitle] = useState<string>(roles[0]?.title ?? "");

  return (
    <section id="open-roles" className="bg-page py-20 md:py-28">
      <div className="containerclass grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <Full_Text
            containerStyle="flex-col gap-6"
            tag={{ text: "OPEN ROLES", style: "" }}
            header={{
              text: "Current openings",
              type: "title",
              style:
                "font-semibold leading-[4rem] md:leading-[5rem] text-[52px] md:text-[64px]",
            }}
            para={{
              text: "At De-Synexia, we’re always on the lookout for passionate, and driven individuals to help us deliver outstanding digital experiences.",
              style: "max-w-[30rem]",
            }}
          />
        </div>

        <div className="rounded-2xl bg-white border border-bd2 overflow-hidden">
          {roles.map((role) => {
            const isOpen = openTitle === role.title;

            return (
              <div
                key={role.title}
                className="border-b border-bd2 last:border-b-0"
              >
                <button
                  type="button"
                  className="w-full px-5 md:px-6 py-4 flex items-center justify-between"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenTitle((cur) =>
                      cur === role.title ? "" : role.title,
                    )
                  }
                >
                  <p className="text-primary font-medium">{role.title}</p>
                  <span className="text-secgray">
                    {isOpen ? (
                      <span className="text-xl leading-none">–</span>
                    ) : (
                      <span className="text-xl leading-none">+</span>
                    )}
                  </span>
                </button>

                <div
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[420px] pb-6" : "max-h-0"
                  }`}
                >
                  <div className="pt-2">
                    <p className="text-primary font-medium">What you’ll do:</p>
                    <ul className="mt-3 grid gap-2 text-prigray text-sm list-disc pl-5">
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-[0_18px_50px_rgba(27,31,32,0.18)]"
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Careers_Openings;
