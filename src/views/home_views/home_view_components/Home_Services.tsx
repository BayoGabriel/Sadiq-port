import { useEffect, useMemo, useRef, useState } from "react";
import Full_Text from "../../../components/Full_Text";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const IconBox = ({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) => {
  return (
    <div
      className={`h-12 w-12 shrink-0 rounded-xl bg-black shadow-lg grid place-items-center transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      aria-hidden={!visible}
    >
      <div className="text-[#19F4D8]">{children}</div>
    </div>
  );
};

const IconPhone = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 2H7C5.343 2 4 3.343 4 5v14c0 1.657 1.343 3 3 3h10c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3Zm1 17c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v14Z" />
    <path d="M10 18h4v2h-4z" />
  </svg>
);

const IconCode = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.7 16.7 4 12l4.7-4.7 1.4 1.4L6.8 12l3.3 3.3-1.4 1.4Zm6.6 0-1.4-1.4L17.2 12l-3.3-3.3 1.4-1.4L20 12l-4.7 4.7Z" />
  </svg>
);

const IconGrid = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
  </svg>
);

const IconPen = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm2.92 2.83H5v-.92l9.06-9.06.92.92-9.06 9.06ZM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82Z" />
  </svg>
);

const IconLayers = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 2 9 5-9 5-9-5 9-5Zm0 11 9 5-9 5-9-5 9-5Z" />
  </svg>
);

const IconRocket = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2c3.866 0 7 3.134 7 7 0 1.066-.242 2.075-.675 2.975l1.675 1.675-3.5 1-1 3.5-1.675-1.675A6.965 6.965 0 0 1 12 16c-3.866 0-7-3.134-7-7s3.134-7 7-7Zm-1 17 2 3H9l2-3Z" />
  </svg>
);

const Home_Services = () => {
  const items: ServiceItem[] = useMemo(
    () => [
      {
        title: "Mobile development",
        description:
          "Custom mobile apps for iOS and Android — built to scale fast.",
        icon: <IconPhone />,
      },
      {
        title: "Web development",
        description:
          "Robust, scalable web apps — front to back. From marketing sites to complex platforms.",
        icon: <IconCode />,
      },
      {
        title: "Branding",
        description:
          "We shape visual identities that stand out, built to scale with your product and resonate with users.",
        icon: <IconGrid />,
      },
      {
        title: "Web design",
        description:
          "User-focused interfaces that are intuitive, polished, and systemized.",
        icon: <IconPen />,
      },
      {
        title: "UX/UI design",
        description:
          "User-focused interfaces that are intuitive, polished, and systemized.",
        icon: <IconLayers />,
      },
      {
        title: "MVP launches",
        description:
          "We specialize in getting early-stage products to market fast, without cutting corners on quality or usability.",
        icon: <IconRocket />,
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndexRef = useRef(activeIndex);
  const lastSwitchAtRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const alwaysVisibleIndices = useMemo(() => {
    const set = new Set<number>();
    if (!items.length) return set;

    set.add(activeIndex);
    if (activeIndex - 1 >= 0) set.add(activeIndex - 1);
    if (activeIndex + 1 < items.length) set.add(activeIndex + 1);

    if (set.size < 3) {
      if (activeIndex <= 0 && items.length >= 3) set.add(2);
      if (activeIndex >= items.length - 1 && items.length >= 3)
        set.add(items.length - 3);
    }

    return set;
  }, [activeIndex, items.length]);

  useEffect(() => {
    let raf = 0;
    const hysteresisPx = 48;
    const cooldownMs = 220;

    const update = () => {
      raf = 0;
      const buttons = rowRefs.current.filter(Boolean) as HTMLButtonElement[];
      if (!buttons.length) return;

      const centerY = window.innerHeight * 0.5;

      let bestIndex = activeIndexRef.current;
      let bestDist = Number.POSITIVE_INFINITY;
      let activeDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < buttons.length; i += 1) {
        const el = buttons[i];
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - centerY);

        if (i === activeIndexRef.current) activeDist = dist;
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      }

      const now = Date.now();
      if (now - lastSwitchAtRef.current < cooldownMs) return;

      const shouldSwitch =
        bestIndex !== activeIndexRef.current &&
        activeDist - bestDist > hysteresisPx;

      if (shouldSwitch) {
        lastSwitchAtRef.current = now;
        setActiveIndex(bestIndex);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length]);

  return (
    <section className="bg-page py-16 md:py-20">
      <div className="containerclass">
        <div className="relative overflow-hidden rounded-[24px] bg-white border border-bd2">
          <Full_Text
            containerStyle="flex-col justify-center items-center"
            tag={{ text: "SERVICES", style: "mx-auto" }}
            header={{
              text: "Product development for startups & tech teams ",
              type: "title",
              style: "font-semibold max-w-[45rem] text-center leading-[5rem]",
            }}
            para={{
              text: "We combine strategy, design, and engineering into one agile workflow.",
            }}
          />
          <div className="divide-y divide-bd2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const iconVisible = alwaysVisibleIndices.has(index);

              return (
                <button
                  key={item.title}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  data-index={index}
                  type="button"
                  onClick={() => {
                    lastSwitchAtRef.current = Date.now();
                    setActiveIndex(index);
                  }}
                  className="w-full text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] items-center gap-5 md:gap-6 px-5 md:px-10 py-7 md:py-8">
                    <div className="flex items-center gap-5">
                      <IconBox visible={iconVisible}>{item.icon}</IconBox>

                      <div
                        className={`transition-all duration-300 ${
                          isActive ? "text-black" : "text-[#9AA4AE]"
                        }`}
                      >
                        <p
                          className={`text-xl sm:text-2xl md:text-3xl leading-tight transition-all duration-300 ${
                            isActive ? "font-semibold" : "font-medium"
                          }`}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          isActive
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm md:text-[15px] text-[#6B7280] max-w-136">
                          {item.description}
                        </p>
                      </div>

                      <div
                        className={`mt-0 overflow-hidden transition-all duration-500 ease-out ${
                          isActive
                            ? "max-h-0 opacity-0"
                            : "max-h-10 opacity-100"
                        }`}
                      >
                        <p className="text-sm md:text-[15px] text-[#6B7280] line-clamp-2 max-w-136">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Services;
