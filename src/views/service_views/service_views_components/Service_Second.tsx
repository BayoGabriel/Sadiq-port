import Full_Text from "../../../components/Full_Text";
import Paragraph from "../../../components/Paragraph";

const Service_Second = () => {
  return (
    <section className="containerclass  py-32">
      <Full_Text
        containerStyle="flex-col  mb-10"
        tag={{ text: "how we’ll help you", style: "" }}
        header={{
          text: "We design and develop performant iOS ",
          type: "subhead",
          style: "font-semibold max-w-[55rem] leading-[3.5rem]",
          extra: (
            <span className="text-secgray">
              and Android apps that launch quickly and grow with your users
            </span>
          ),
        }}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            className="rounded-xl bg-white px-6 py-8 flex items-center gap-4"
            key={index}
          >
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="40"
                height="40"
                rx="8"
                stroke="#CEDADD"
              />
              <path
                d="M28.4425 16.567L18.4425 26.567C18.3845 26.6252 18.3156 26.6713 18.2397 26.7027C18.1638 26.7342 18.0825 26.7504 18.0003 26.7504C17.9182 26.7504 17.8369 26.7342 17.761 26.7027C17.6851 26.6713 17.6162 26.6252 17.5582 26.567L13.1832 22.192C13.0659 22.0748 13 21.9157 13 21.7499C13 21.584 13.0659 21.4249 13.1832 21.3077C13.3004 21.1904 13.4595 21.1245 13.6253 21.1245C13.7912 21.1245 13.9503 21.1904 14.0675 21.3077L18.0003 25.2413L27.5582 15.6827C27.6754 15.5654 27.8345 15.4995 28.0003 15.4995C28.1662 15.4995 28.3253 15.5654 28.4425 15.6827C28.5598 15.7999 28.6257 15.959 28.6257 16.1249C28.6257 16.2907 28.5598 16.4498 28.4425 16.567Z"
                fill="#101213"
              />
            </svg>

            <Paragraph
              text="Cross-platform development (React Native or Flutter)"
              style="text-prigray"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service_Second;
