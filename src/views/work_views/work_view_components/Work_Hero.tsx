import Full_Text from "../../../components/Full_Text";

type WorkHeroProps = {
  activeTab: string;
  onChangeTab: (tab: string) => void;
};

const Work_Hero = ({ activeTab, onChangeTab }: WorkHeroProps) => {
  const tabs = ["All", "Mobile", "Website", "WebApp"];

  return (
    <section className="bg-page py-20">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center gap-4"
          tag={{ text: "portfolio", style: "mx-auto" }}
          header={{
            text: "Our design record",
            type: "title",
            style:
              "font-semibold max-w-[35rem] text-center leading-[3.2rem] md:leading-[5rem]",
          }}
          para={{
            text: "Explore a few of the designs we’ve helped bring to market — with creativity, clarity, and speed.",
            style: "max-w-[30rem] text-center text-base",
          }}
        />

        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-white border border-bd2 p-1">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onChangeTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-transparent text-secgray hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_Hero;
