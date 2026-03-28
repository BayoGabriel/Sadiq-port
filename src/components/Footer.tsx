import { Link } from "react-router-dom";
import Logo2 from "../assets/svgs/Logo2";
import { LogoText } from "../assets/images";
import Lazy_Image from "./Lazy_Image";

const Footer = () => {
  const footerData = [
    {
      name: "Company",
      list: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Work",
          link: "/work",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Career",
          link: "/",
        },
      ],
    },
    {
      name: "Services",
      list: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Work",
          link: "/work",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Career",
          link: "/",
        },
      ],
    },
    {
      name: "Resourses",
      list: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Home",
          link: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-primary">
      <section className="containerclass pt-20 pb-4 grid gap-16">
        <div className="flex">
          <div className="w-[50%] flex flex-col justify-between">
            <Logo2 />
            <div>
              <p className="text-white font-medium">
                Address (we work globally)
              </p>
              <p className="text-darkgray">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
            <p className="text-white">Socials</p>
          </div>
          <div className="w-[50%] flex justify-between">
            {footerData.map((item, index) => (
              <div key={index}>
                <h5 className="text-white font-medium mb-4">{item.name}</h5>
                <div className="flex flex-col gap-2">
                  {item.list.map((item, index) => (
                    <Link to={item.link} key={index} className="text-darkgray">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Lazy_Image
          src={LogoText}
          alt=""
          wrapperClassName="w-full"
          className="w-full"
        />

        <div className="flex justify-between text-darkgray">
          <p>© 2026 De-Synexia. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
