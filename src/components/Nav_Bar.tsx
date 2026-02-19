import { Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo";
import Button from "./Button";

const Nav_Bar = () => {
  const nav_list = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Insights",
      link: "/",
    },
  ];
  return (
    <section className="bg-page">
      <div className="containerclass flex justify-between items-center py-4">
        <Logo />

        <div className="flex items-center gap-6">
          {nav_list.map((item, index) => (
            <Link to={item.link} key={index} className="text-prigray">
              {item.name}
            </Link>
          ))}
        </div>

        <Button
          text="Let's talk"
          style="bg-white text-primary border-bd border"
        />
      </div>
    </section>
  );
};

export default Nav_Bar;
