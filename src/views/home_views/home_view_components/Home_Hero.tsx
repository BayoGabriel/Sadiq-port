import Full_Text from "../../../components/Full_Text";
import Tool from "../../../assets/svgs/Tool";
import Code from "../../../assets/svgs/Code";
import Double_Btn from "../../../components/Double_Btn";

const Home_Hero = () => {
  return (
    <section className="py-20 bg-page">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-4"
          tag={{ style: "font-medium text-sm", text: "+20 products launched" }}
          header={{
            text: "",
            type: "title",
            extra: (
              <>
                <span className="flex items-center gap-6">
                  <span>We design</span>
                  <span className="h-12 w-12 items-center -ml-4">
                    <Tool />
                  </span>
                  <span>and build</span>
                </span>
                <span className="flex gap-2 items-center mx-auto justify-center">
                  <span className="">digital products </span>{" "}
                  <span className="w-16 h-12 ">
                    <Code />
                  </span>
                </span>
              </>
            ),
            style: "font-semibold leading-[5rem]",
          }}
          para={{
            text: "From strategy to shipping, we partner with startups and tech teams to create scalable, user-driven products — fast, and future-ready.",
            style: "max-w-[29rem] text-center text-base mt-2",
          }}
        />
        <Double_Btn
          btn1={{
            text: "Let's talk",
            style: "bg-linear-to-tr from-gradient1 to-gradient2 text-white",
            color: "#ffffff",
          }}
          btn2={{ style: "bg-white", text: "See our work", show_icon: false }}
          style="w-fit mt-8"
        />
      </div>
    </section>
  );
};

export default Home_Hero;
