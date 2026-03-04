import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Woman } from "../../../assets/images";

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
        avatarSrc: Woman,
      },
      {
        quote:
          "Clear communication, sharp execution, and a strong product mindset. They helped us ship quickly without sacrificing quality.",
        name: "Ade T",
        title: "Founder, Stead",
        avatarSrc: Woman,
      },
      {
        quote:
          "From discovery to launch, the process was smooth and collaborative. We ended up with a scalable design system and a clean codebase.",
        name: "Mira K",
        title: "Design Lead, Sprout",
        avatarSrc: Woman,
      },
      {
        quote:
          "They understood the roadmap, spotted risks early, and kept the team aligned. The launch was one of our cleanest ever.",
        name: "Jon P",
        title: "CTO, Northwind",
        avatarSrc: Woman,
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
    <section className="bg-page py-24">
      <div className="containerclass">
        <div className="relative overflow-hidden rounded-[28px] bg-white px-6 md:px-10 py-16">
          <div className="relative h-[240px] md:h-[220px]">
            {stack
              .slice()
              .reverse()
              .map(({ t, order, index }) => {
                const isActive = index === activeIndex;

                const scale = 1 - order * 0.06;
                const translateX = -order * 26;
                const translateY = order * 10;
                const rotate = -order * 3;
                const opacity = order === 3 ? 0.25 : 1;

                return (
                  <div
                    key={`${t.name}-${index}`}
                    className="absolute left-1/2 top-1/2 w-[92%] md:w-[520px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      opacity,
                      filter: order >= 2 ? "blur(0.2px)" : "none",
                      transition:
                        "transform 420ms ease, opacity 420ms ease, filter 420ms ease",
                      zIndex: 50 - order,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="rounded-2xl border border-bd2 bg-white shadow-xl p-7">
                      <p className="text-prigray text-sm md:text-[15px] leading-6">
                        “{t.quote}”
                      </p>

                      <div className="flex items-center gap-3 mt-6">
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

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white shadow-lg border border-bd2 px-3 py-2">
              <button
                type="button"
                onClick={() => {
                  prev();
                  restartTimer();
                }}
                className="h-10 w-10 rounded-full grid place-items-center bg-white hover:bg-page transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#101213"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => {
                  next();
                  restartTimer();
                }}
                className="h-10 w-10 rounded-full grid place-items-center bg-white hover:bg-page transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#101213"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Testimonials;
