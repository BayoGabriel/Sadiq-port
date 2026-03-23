import Card_Img from "../../../components/Card_Img";
import { Link } from "react-router-dom";
import { workItems } from "../../../data/work";

type WorkListProps = {
  activeTab: string;
};

const Work_List = ({ activeTab }: WorkListProps) => {
  const filtered =
    activeTab === "All"
      ? workItems
      : workItems.filter((i) => i.category === activeTab);

  return (
    <section className="containerclass py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((item, index) => (
          <Link
            to={`/work/${item.id}`}
            key={index}
            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-xl"
            aria-label={`Open case study: ${item.title}`}
          >
            <Card_Img title={item.id} image={item.image} tags={item.tags} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work_List;
