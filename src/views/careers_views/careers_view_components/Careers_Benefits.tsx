import Full_Text from "../../../components/Full_Text";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const IconEye = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 5c5.5 0 9.5 4.5 10.5 6.1a1.8 1.8 0 0 1 0 1.8C21.5 14.5 17.5 19 12 19S2.5 14.5 1.5 12.9a1.8 1.8 0 0 1 0-1.8C2.5 9.5 6.5 5 12 5Zm0 2c-3.9 0-7 3.1-8.4 5 1.4 1.9 4.5 5 8.4 5s7-3.1 8.4-5c-1.4-1.9-4.5-5-8.4-5Zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Z" />
  </svg>
);

const IconImpact = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
  </svg>
);

const IconAutonomy = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5v5.586l3.707 3.707-1.414 1.414L11 13.414V7h2Z" />
  </svg>
);

const IconTeam = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-3 0-6 1.5-6 4v2h12v-2c0-2.5-3-4-6-4ZM8 13c-2.5 0-5 1.2-5 3.2V19h6v-2c0-1.6.7-3 2-4-.9-.3-1.9-.5-3-.5Z" />
  </svg>
);

const IconTools = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 19.6 17.4 15a6.9 6.9 0 0 1-7.7-1.2 7 7 0 0 1-1.5-7.6l3.7 3.7 2.1-2.1L10.3 4a7 7 0 0 1 7.5 1.6 6.9 6.9 0 0 1 1.2 7.7L23.6 18 22 19.6ZM7 20a5 5 0 0 1-5-5c0-1.3.5-2.5 1.3-3.4l3.4 3.4 2.1-2.1-3.4-3.4A5 5 0 1 1 7 20Z" />
  </svg>
);

const IconClock = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 10.4 3.3 2-1 1.7L11 13V7h2v5.4Z" />
  </svg>
);

const Careers_Benefits = () => {
  const benefits: Benefit[] = [
    {
      title: "Remote-first",
      description: "Work from anywhere, on your terms.",
      icon: <IconEye />,
    },
    {
      title: "Real impact",
      description: "Build products that ship fast and scale.",
      icon: <IconImpact />,
    },
    {
      title: "Autonomy",
      description: "Take ownership and lead with trust.",
      icon: <IconAutonomy />,
    },
    {
      title: "Tight-knit team",
      description: "Collaborate with skilled, motivated people.",
      icon: <IconTeam />,
    },
    {
      title: "Modern tools",
      description: "Work with up-to-date tech and workflows.",
      icon: <IconTools />,
    },
    {
      title: "Flexible hours",
      description: "Set a schedule that fits your life.",
      icon: <IconClock />,
    },
  ];

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col gap-6"
          tag={{
            text: "BENEFITS",
            style: "bg-white/5 border-white/10 text-white",
          }}
          header={{
            text: "What we offer",
            type: "title",
            style:
              "text-white font-semibold leading-[4rem] md:leading-[5rem] text-[52px] md:text-[64px]",
          }}
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="grid gap-3">
              <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-[#19F4D8]">
                {b.icon}
              </div>
              <div>
                <p className="text-white font-semibold">{b.title}</p>
                <p className="text-white/60 text-sm mt-1 max-w-[20rem]">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers_Benefits;
