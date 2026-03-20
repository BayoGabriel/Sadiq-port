const Work_Help = () => {
  const items = [
    "Cross-platform development (React Native or Flutter)",
    "Native iOS and Android builds (when needed)",
    "API integration & backend support",
    "UI animations & interaction design",
    "App store deployment and launch support",
    "Continuous delivery & post-launch iteration",
  ];

  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <div className="bg-white/0">
          <div className="inline-flex items-center rounded-full border border-bd2 bg-white px-4 py-2 text-xs font-medium text-primary">
            HOW WE’LL HELP YOU
          </div>

          <h2 className="mt-6 max-w-[62rem] text-4xl md:text-6xl font-semibold leading-[2.8rem] md:leading-[4.2rem] text-primary">
            We design and develop performant iOS{" "}
            <span className="text-secgray">and Android apps that launch quickly</span>{" "}
            <span className="text-secgray">and grow with your users</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {items.map((text) => (
              <div
                key={text}
                className="rounded-2xl border border-bd2 bg-white px-5 py-5"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-7 w-7 place-items-center rounded-md border border-bd2 bg-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6666 3.79175L5.83325 9.62508L2.91659 6.70841"
                        stroke="#0B0F11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-secgray leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_Help;
