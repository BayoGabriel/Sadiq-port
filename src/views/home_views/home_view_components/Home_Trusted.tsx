import {
  Bravoo_App,
  Bravoo_Web,
  Phone,
  Loda,
  Currencys,
  Ecom,
} from "../../../assets/images";
import Button from "../../../components/Button";
import Card_Img from "../../../components/Card_Img";
import Full_Text from "../../../components/Full_Text";
import { useNavigate } from "react-router-dom";

const Home_Trusted = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      title: "Currencys",
      tags: ["Mobile app", "UI/UX design"],
      image: Phone,
    },
    {
      title: "Bravoo",
      tags: ["Website", "UI/UX design"],
      image: Bravoo_Web,
    },
    {
      title: "Bravoo",
      tags: ["Mobile app", "UI/UX design", "MVP"],
      image: Bravoo_App,
    },
    {
      title: "Loda Point",
      tags: ["Mobile app", "UI/UX design", "MVP"],
      image: Loda,
    },
    {
      title: "Currencys",
      tags: ["Website", "UI/UX design"],
      image: Currencys,
    },
    {
      title: "E-Commerce",
      tags: ["Marketing", "UI/UX design"],
      image: Ecom,
    },
  ];
  return (
    <section className="bg-page py-16 md:py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center"
          tag={{ text: "portfolio", style: "mx-auto" }}
          header={{
            text: "Trusted by startups to scale fast ",
            type: "title",
            style:
              "font-semibold max-w-[35rem] text-center leading-[3.2rem] md:leading-[5rem]",
          }}
        />
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {jobs.map((job, index) => (
            <Card_Img key={index} {...job} />
          ))}
        </div>
        <Button
          text="View all work"
          style="bg-linear-to-tr mx-auto mt-10 shadow-2xl from-gradient1 to-gradient2 text-white"
          color="#ffffff"
          show_icon={false}
          onClick={() => navigate("/work")}
        />
      </div>
    </section>
  );
};

export default Home_Trusted;
