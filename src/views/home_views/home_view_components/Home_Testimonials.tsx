import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Lina } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
};

const mod = (n: number, m: number) => ((n % m) + m) % m;

const Home_Testimonials = () => {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
        name: "Lina M",
        title: "Head of Product at Verno",
        avatarSrc: Lina,
      },
      {
        quote:
          "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
        name: "Ade T",
        title: "Founder, Stead",
        avatarSrc: Lina,
      },
      {
        quote:
          "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
        name: "Mira K",
        title: "Design Lead, Sprout",
        avatarSrc: Lina,
      },
      {
        quote:
          "Novure felt like an extension of our own team. They moved fast, challenged our thinking, and delivered a product that exceeded expectations — all under tight deadlines.",
        name: "Jon P",
        title: "CTO, Northwind",
        avatarSrc: Lina,
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  const count = testimonials.length;

  const setActiveSafe = (next: number) => {
    const normalized = mod(next, count);
    setActiveIndex(normalized);
    activeIndexRef.current = normalized;
  };

  const next = () => setActiveSafe(activeIndexRef.current + 1);
  const prev = () => setActiveSafe(activeIndexRef.current - 1);

  const restartTimer = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActiveSafe(activeIndexRef.current + 1);
    }, 3000);
  }, [count]);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [restartTimer]);

  const stack = useMemo(() => {
    const list: Array<{ t: Testimonial; order: number; index: number }> = [];
    for (let offset = 0; offset < Math.min(4, count); offset += 1) {
      const index = mod(activeIndex + offset, count);
      list.push({ t: testimonials[index], order: offset, index });
    }
    return list;
  }, [activeIndex, count, testimonials]);

  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center"
          tag={{ text: "testimonials", style: "mx-auto uppercase" }}
          header={{
            text: "Real feedback from teams we've partnered with",
            type: "title",
            style: "font-semibold max-w-[48rem] text-center leading-[5rem]",
          }}
        />

        <div className="relative mx-auto mt-12 md:mt-20">
          <div className="relative w-full items-center justify-center flex mx-auto h-[300px] sm:h-[320px] md:h-[340px]">
            {stack
              .slice()
              .reverse()
              .map(({ t, order, index }) => {
                const isActive = index === activeIndex;

                const scale = 1 - order * 0.001;
                const translateX = -order * 70;
                const translateY = order * 5;
                const rotate = -order * 1;
                const opacity = order === 3 ? 0.25 : 1;

                return (
                  <div
                    key={`${t.name}-${index}`}
                    className="absolute w-[92%] sm:w-[86%] md:w-[340px] md:h-[210px]"
                    style={{
                      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      opacity,
                      // filter: order >= 2 ? "blur(0.2px)" : "none",
                      transition:
                        "transform 420ms ease, opacity 420ms ease, filter 420ms ease",
                      zIndex: 50 - order,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="rounded-2xl border border-bd2 bg-white shadow-lg p-5">
                      <p className="text-prigray text-sm md:text-[15px] leading-6 text-left">
                        “{t.quote}”
                      </p>

                      <div className="flex items-center gap-3 mt-6 justify-start">
                        <img
                          src={t.avatarSrc}
                          alt={t.name}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <p className="text-primary font-medium text-sm leading-4">
                            {t.name}
                          </p>
                          <p className="text-secgray text-xs mt-1">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                prev();
                restartTimer();
              }}
              className="p-4 rounded-[100px] md:h-10 md:w-[56px] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.21938 11.469L9.96937 4.71896C10.1101 4.57823 10.301 4.49916 10.5 4.49916C10.699 4.49916 10.8899 4.57823 11.0306 4.71896C11.1714 4.85969 11.2504 5.05056 11.2504 5.24958C11.2504 5.44861 11.1714 5.63948 11.0306 5.78021L5.56031 11.2496L20.25 11.2496C20.4489 11.2496 20.6397 11.3286 20.7803 11.4693C20.921 11.6099 21 11.8007 21 11.9996C21 12.1985 20.921 12.3893 20.7803 12.5299C20.6397 12.6706 20.4489 12.7496 20.25 12.7496L5.56031 12.7496L11.0306 18.219C11.1714 18.3597 11.2504 18.5506 11.2504 18.7496C11.2504 18.9486 11.1714 19.1395 11.0306 19.2802C10.8899 19.4209 10.699 19.5 10.5 19.5C10.301 19.5 10.1101 19.4209 9.96937 19.2802L3.21938 12.5302C3.14964 12.4606 3.09432 12.3778 3.05658 12.2868C3.01884 12.1957 2.99941 12.0981 2.99941 11.9996C2.99941 11.901 3.01884 11.8034 3.05658 11.7124C3.09432 11.6213 3.14964 11.5386 3.21938 11.469Z"
                  fill="black"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => {
                next();
                restartTimer();
              }}
              className="p-4 rounded-[100px] md:h-10 md:w-[56px] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Testimonials;
