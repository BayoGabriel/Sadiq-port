import { RectBg } from "../assets/images";
import Full_Text from "./Full_Text";

const Sub_Footer = () => {
  return (
    <section className="bg-white py-28 relative">
      <div className="absolute inset-0 h-full w-full">
        <img src={RectBg} alt="" className="w-full h-full" />
      </div>
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-2"
          header={{
            text: "Let's build ",
            type: "subhead",
            style: "leading-[5rem] text-center font-semibold",
            extra: (
              <>
                <span className="block text-secgray -mt-8">something real</span>
              </>
            ),
          }}
          para={{
            text: "Tell us about your product idea, challenge, or roadmap. We’ll offer honest input and see if we’re the right fit.",
            style: "max-w-[30rem] text-center text-prigray text-base",
          }}
          btn={{
            text: "Let's talk",
            style:
              "bg-linear-to-tr from-gradient1 to-gradient2 text-white mt-8",
            color: "#ffffff",
          }}
        />
      </div>
    </section>
  );
};

export default Sub_Footer;
