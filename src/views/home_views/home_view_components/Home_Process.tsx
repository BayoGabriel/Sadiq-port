import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

const Home_Process = () => {
  const steps: ProcessStep[] = useMemo(
    () => [
      {
        title: "Discover",
        description:
          "We specialize in getting early-stage products to market fast, without cutting corners on quality or usability.",
      },
      {
        title: "Design",
        description:
          "Next, we bring your idea to life visually. We craft intuitive UX flows, clean UI, and scalable design systems tailored to your users.",
      },
      {
        title: "Build",
        description:
          "Our engineers develop a fast, scalable product using modern frameworks — mobile, web, or both — with clean, maintainable code.",
      },
      {
        title: "Launch and Grow",
        description:
          "We ship, test, and optimize. From App Store to web launch to post-release support, we help your product evolve with your users.",
      },
    ],
    [],
  );

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [circleYs, setCircleYs] = useState<number[]>([]);
  const [lineStartY, setLineStartY] = useState(0);
  const [lineEndY, setLineEndY] = useState(0);
  const [progress, setProgress] = useState(0);

  const measure = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const timelineRect = timeline.getBoundingClientRect();
    const timelineTopDoc = timelineRect.top + window.scrollY;

    const circles = circleRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!circles.length) return;

    const ys = circles.map((el) => {
      const rect = el.getBoundingClientRect();
      const centerDoc = rect.top + window.scrollY + rect.height / 2;
      return centerDoc - timelineTopDoc;
    });

    setCircleYs(ys);
    setLineStartY(ys[0]);
    setLineEndY(ys[ys.length - 1]);
  };

  useLayoutEffect(() => {
    measure();

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [steps.length]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!lineStartY || !lineEndY || lineEndY <= lineStartY) return;

      const timeline = timelineRef.current;
      if (!timeline) return;

      const timelineRect = timeline.getBoundingClientRect();
      const timelineTopDoc = timelineRect.top + window.scrollY;
      const viewportCenterDoc = window.scrollY + window.innerHeight * 0.55;
      const viewportCenterLocal = viewportCenterDoc - timelineTopDoc;

      const pct = (viewportCenterLocal - lineStartY) / (lineEndY - lineStartY);
      setProgress(clamp01(pct));
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [lineStartY, lineEndY]);

  const bright = "#05F6CC";
  const dim = "rgba(152,166,170,0.25)";

  const totalLinePx = Math.max(0, lineEndY - lineStartY);
  const brightLinePx = totalLinePx * progress;

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="containerclass">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-14 items-start">
          <div>
            <div className="bg-[#181C1D] text-white border border-[#282E30] rounded-full px-4 py-2 w-fit text-sm font-medium">
              PROCESS
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold  mt-6 max-w-[30rem]">
              A simple, proven approach to shipping great products
            </h2>
            <p className="text-secgray mt-6 max-w-[28rem]">
              We keep things lean, clear, and collaborative — from idea to
              launch.
            </p>
          </div>
        </div>
        <div className="flex justify-start lg:justify-end w-full mt-12 lg:mt-0">
          <div
            ref={timelineRef}
            className="relative w-full sm:w-[92%] md:w-[70%] lg:w-[40%]"
          >
            <div
              className="absolute left-[35px] w-[2px]"
              style={{
                top: `${lineStartY}px`,
                height: `${totalLinePx}px`,
                background: `linear-gradient(to bottom, ${dim}, ${dim})`,
              }}
              aria-hidden
            />

            <div
              className="absolute left-[35px] w-[2px]"
              style={{
                top: `${lineStartY}px`,
                height: `${Math.max(0, brightLinePx)}px`,
                background: `linear-gradient(to bottom, ${bright}, rgba(5,246,204,0.2))`,
                transition: "height 120ms linear",
              }}
              aria-hidden
            />

            <div className="flex flex-col gap-16 md:gap-28 lg:gap-40">
              {steps.map((step, idx) => {
                const y = circleYs[idx] ?? 0;
                const progressY = lineStartY + totalLinePx * progress;
                const completed = y > 0 && progressY >= y;

                return (
                  <div
                    key={step.title}
                    className="grid grid-cols-[70px_1fr] gap-4 md:gap-5"
                  >
                    <div className="relative flex justify-center">
                      <div
                        ref={(el) => {
                          circleRefs.current[idx] = el;
                        }}
                        className="h-10 w-10 rounded-full grid place-items-center text-xs font-semibold"
                        style={{
                          backgroundColor: completed
                            ? bright
                            : "rgba(255,255,255,0.06)",
                          color: completed
                            ? "#0b0d0e"
                            : "rgba(255,255,255,0.5)",
                          boxShadow: completed
                            ? "0 0 0 6px rgba(255,255,255,1)"
                            : "0 0 0 6px rgba(255,255,255,0.03)",
                          transition: "all 220ms ease",
                        }}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    <div>
                      <p
                        className="text-white text-xl font-semibold"
                        style={{
                          opacity: completed ? 1 : 0.7,
                          transition: "opacity 220ms ease",
                        }}
                      >
                        {step.title}
                      </p>
                      <p className="text-secgray text-sm mt-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Process;
