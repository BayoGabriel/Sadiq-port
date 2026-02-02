import Full_Text from "../../components/Full_Text";

const Home_View = () => {
  return (
    <section className="py-20 bg-page">
      <div className="containerclass">
        <Full_Text
          containerStyle="flex-col justify-center items-center"
          tag={{ style: "font-medium text-sm", text: "+20 products launched" }}
        />
      </div>
    </section>
  );
};

export default Home_View;
