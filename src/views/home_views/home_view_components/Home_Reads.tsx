import { Phone, RectBg, Woman } from "../../../assets/images";
import Button from "../../../components/Button";

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
      image: Phone,
      imageAlt: "Phone mockup",
      imageWrapClassName: "bg-page",
      imageClassName: "h-[190px] w-auto object-contain",
    },
    {
      tag: "MVP",
      time: "5 min read",
      title: "Launch smart, launch fast",
      description: "How to validate your idea with a lean MVP.",
      image: RectBg,
      imageAlt: "Laptop mockup",
      imageWrapClassName: "bg-white",
      imageClassName: "h-[190px] w-auto object-contain",
    },
    {
      tag: "Development",
      time: "5 min read",
      title: "Build once, scale forever",
      description: "How we approach scalable full-stack architecture.",
      image: Woman,
      imageAlt: "Device mockup",
      imageWrapClassName: "bg-black",
      imageClassName: "h-[190px] w-auto object-contain",
    },
  ];

  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="flex flex-col gap-4">
              <div
                className={`h-[245px] rounded-[20px] border border-bd2 shadow-sm overflow-hidden grid place-items-center ${card.imageWrapClassName}`}
              >
                <div className="w-full h-full grid place-items-center p-8">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className={card.imageClassName}
                  />
                </div>
              </div>

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
