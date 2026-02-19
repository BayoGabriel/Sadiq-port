import { Phone } from "../../../assets/images";
import Full_Text from "../../../components/Full_Text";

const About_Hero = () => {
  return (
    <section className="py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col gap-4"
          tag={{ text: "About DE-SYNEXIA", style: "" }}
          header={{
            text: "We build with vision",
            type: "title",
            style: "font-semibold  leading-[5rem]",
          }}
          para={{
            text: "Novure is a remote digital product agency partnering with startups and tech teams to design, build, and launch scalable software. From strategy to shipped, we move fast — without cutting corners.",
            style: "max-w-[30rem]  text-base text-prigray",
          }}
        />
      </div>

      <section className="containerclass grid gap-2 pt-20">
        <div className="flex gap-4">
          {[1, 2, 3].map(() => (
            <Full_Text
              containerStyle="flex-col bg-white px-8 py-4 rounded-xl flex-1 gap-0"
              header={{
                text: "20+",
                type: "subhead",
                style: "font-semibold  leading-[5rem]",
              }}
              para={{
                text: "Products launched from MVP to market.",
                style: "max-w-[60%]  text-base text-prigray",
              }}
            />
          ))}
        </div>

        <div>
          <img
            src={Phone}
            alt=""
            className="max-h-100 w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex gap-4">
          {[1, 2].map(() => (
            <Full_Text
              containerStyle="flex-col bg-white px-8 py-6 rounded-xl flex-1 gap-4"
              tag={{ text: "Our mission", style: "" }}
              header={{
                text: "Build what matters.",
                type: "cardhead",
                style: "font-semibold  ",
              }}
              para={{
                text: "We partner with visionary teams to bring bold digital products to life — fast, scalable, and user-first from day one.",
                style: "max-w-[60%]  text-base text-prigray",
              }}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default About_Hero;
