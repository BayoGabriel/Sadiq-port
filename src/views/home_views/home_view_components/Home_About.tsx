import { Sadiq } from "../../../assets/images";

const Home_About = () => {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="containerclass">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white border border-bd2 rounded-full px-4 py-2 w-fit text-sm font-medium text-primary">
            ABOUT US
          </div>
          <h2 className="text-primary text-4xl md:text-6xl font-semibold mt-6 leading-[2.8rem] md:leading-[4.2rem] max-w-[44rem]">
            Shaping products with
            <span className="block">speed and precision</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-bd2 rounded-[24px] px-8 py-8">
            <div className="border border-bd2 rounded-full px-4 py-2 w-fit text-sm text-prigray bg-white">
              Our mission
            </div>
            <p className="text-primary font-semibold text-xl mt-6">
              Build what matters.
            </p>
            <p className="text-prigray mt-3 max-w-[30rem]">
              We partner with visionary teams to bring bold digital products to
              life — fast, scalable, and user-first from day one.
            </p>
          </div>

          <div className="bg-white border border-bd2 rounded-[24px] px-8 py-8">
            <div className="border border-bd2 rounded-full px-4 py-2 w-fit text-sm text-prigray bg-white">
              Who we work with
            </div>
            <p className="text-primary font-semibold text-xl mt-6">
              Built for early-stage speed.
            </p>
            <p className="text-prigray mt-3 max-w-[30rem]">
              Startups, scale-ups, and tech-led companies that need fast,
              focused delivery — without the overhead of a big agency.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          <div className="bg-white border border-bd2 rounded-[24px] px-10 flex flex-col justify-between py-10">
            <p className="text-primary text-xl sm:text-2xl md:text-3xl font-semibold leading-8 sm:leading-10 md:leading-[2.75rem]">
              <span className="text-secgray">
                “I started De-Synexia after years of working with
              </span>{" "}
              startups{" "}
              <span className="text-secgray">who needed more than just</span>{" "}
              design <span className="text-secgray">or</span> code,
              <span className="text-secgray">
                {" "}
                they needed a real partner. Someone who could
              </span>{" "}
              move fast, think clearly, and help get products out the door.{" "}
              <span className="text-secgray">
                That’s what we built De-Synexia to do, and it’s how we still
                work today.”
              </span>
            </p>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-black overflow-hidden">
                <img
                  src={Sadiq}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-semibold text-sm">
                  Abubakar Sadiq Abdulazeez,
                </p>
                <p className="text-secgray text-sm">Product Designer</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-bd2 rounded-[24px] overflow-hidden">
            <img src={Sadiq} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-bd2 rounded-[24px] px-10 py-10">
            <p className="text-primary text-5xl font-semibold">20+</p>
            <p className="text-primary font-semibold mt-4">Products</p>
            <p className="text-secgray mt-1">launched from MVP to market</p>
          </div>

          <div className="bg-white border border-bd2 rounded-[24px] px-10 py-10">
            <p className="text-primary text-5xl font-semibold">10+</p>
            <p className="text-primary font-semibold mt-4">Years</p>
            <p className="text-secgray mt-1">of combined experience</p>
          </div>

          <div className="bg-white border border-bd2 rounded-[24px] px-10 py-10">
            <p className="text-primary text-5xl font-semibold">15+</p>
            <p className="text-primary font-semibold mt-4">Industries</p>
            <p className="text-secgray mt-1">
              served — from fintech to health to AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_About;
