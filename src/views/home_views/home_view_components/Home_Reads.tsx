import { Blog1, Blog2, Blog3 } from "../../../assets/images";
import Button from "../../../components/Button";
import Full_Text from "../../../components/Full_Text";

type ReadCard = {
  tag: string;
  time: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWrapClassName: string;
  imageClassName: string;
};

const Home_Reads = () => {
  const cards: ReadCard[] = [
    {
      tag: "Design",
      time: "5 min read",
      title: "Fast UX for MVPs",
      description: "Launch usable products without overthinking flows.",
      image: Blog1,
      imageAlt: "Phone mockup",
      imageWrapClassName: "bg-page",
      imageClassName: "w-full object-contain",
    },
    {
      tag: "MVP",
      time: "5 min read",
      title: "Launch smart, launch fast",
      description: "How to validate your idea with a lean MVP.",
      image: Blog2,
      imageAlt: "Laptop mockup",
      imageWrapClassName: "bg-white",
      imageClassName: "w-full object-contain",
    },
    {
      tag: "Development",
      time: "5 min read",
      title: "Build once, scale forever",
      description: "How we approach scalable full-stack architecture.",
      image: Blog3,
      imageAlt: "Device mockup",
      imageWrapClassName: "bg-black",
      imageClassName: " w-full object-contain",
    },
  ];

  return (
    <section className="bg-page py-16 md:py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center"
          tag={{ text: "insights", style: "mx-auto uppercase" }}
          header={{
            text: "Practical thinking on product, design, and dev",
            type: "title",
            style:
              "font-semibold max-w-[48rem] text-center leading-[3.2rem] md:leading-[5rem]",
          }}
        />
        <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`flex flex-col gap-4 ${
                index === 0 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="w-full object-cover"
              />

              <div className="flex items-center gap-3">
                <div className="rounded-full px-3 py-1 bg-white border border-bd2">
                  <p className="text-primary text-xs font-medium">{card.tag}</p>
                </div>
                <p className="text-secgray text-xs">{card.time}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-primary font-semibold text-lg leading-tight">
                  {card.title}
                </p>
                <p className="text-prigray text-sm max-w-88">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Button
          style="bg-gradient2 text-white shadow-2xl mt-12 w-fit mx-auto"
          color="#ffffff"
          text="View all"
          show_icon={false}
        />
      </div>
    </section>
  );
};

export default Home_Reads;
