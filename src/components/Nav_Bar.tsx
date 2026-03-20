import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/svgs/Logo";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";

const Nav_Bar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpenMobile(false);
  }, [location.pathname]);

  const services = useMemo(
    () => [
      { name: "Mobile development", link: "/services/mobile-development" },
      { name: "Web development", link: "/services/web-development" },
      { name: "Branding", link: "/services/branding" },
      { name: "UI/UX", link: "/services/ui-ux" },
      { name: "MVP launches", link: "/services/mvp-launches" },
    ],
    [],
  );

  const nav_list = useMemo(
    () => [
      { name: "Home", link: "/" },
      { name: "Work", link: "/work" },
      { name: "About", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Insights", link: "/" },
    ],
    [],
  );

  const isActive = (path: string) => location.pathname === path;

  return (
    <section className="bg-page">
      <div className="containerclass flex justify-between items-center py-4 relative">
        <Link to="/" className="shrink-0" aria-label="Go to home">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {nav_list.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className={`text-prigray transition-colors duration-200 hover:text-primary ${
                isActive(item.link) ? "text-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="relative group">
            <button
              type="button"
              className="text-prigray transition-colors duration-200 hover:text-primary inline-flex items-center gap-2"
              aria-haspopup="menu"
            >
              Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="M6.7 8.7a1 1 0 0 1 1.4 0L12 12.6l3.9-3.9a1 1 0 1 1 1.4 1.4l-4.6 4.6a1 1 0 0 1-1.4 0L6.7 10.1a1 1 0 0 1 0-1.4Z" />
              </svg>
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-[320px] rounded-2xl bg-white border border-bd2 shadow-[0_18px_50px_rgba(27,31,32,0.12)] overflow-hidden">
                <div className="p-3 grid gap-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="rounded-xl px-4 py-3 text-primary/90 hover:bg-page transition-colors duration-200"
                    >
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-prigray">
                        Explore our {item.name.toLowerCase()} offering.
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Button
            text="Let's talk"
            style="bg-white text-primary border-bd border"
          />
        </div>

        <button
          type="button"
          className="md:hidden h-11 w-11 grid place-items-center rounded-xl bg-white border border-bd2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 7h16v2H4V7Zm0 8h16v2H4v-2Zm0-4h16v2H4v-2Z" />
            </svg>
          )}
        </button>

        {mobileOpen ? (
          <div className="md:hidden absolute left-0 right-0 top-full mt-3">
            <div className="rounded-2xl bg-white border border-bd2 shadow-[0_18px_50px_rgba(27,31,32,0.12)] overflow-hidden">
              <div className="p-3 grid gap-1">
                {nav_list.map((item) => (
                  <Link
                    to={item.link}
                    key={item.name}
                    className={`rounded-xl px-4 py-3 font-medium transition-colors duration-200 ${
                      isActive(item.link)
                        ? "bg-page text-primary"
                        : "text-primary/90 hover:bg-page"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-medium text-primary/90 hover:bg-page transition-colors duration-200 flex items-center justify-between"
                  aria-expanded={servicesOpenMobile}
                  onClick={() => setServicesOpenMobile((v) => !v)}
                >
                  Services
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${
                      servicesOpenMobile ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6.7 8.7a1 1 0 0 1 1.4 0L12 12.6l3.9-3.9a1 1 0 1 1 1.4 1.4l-4.6 4.6a1 1 0 0 1-1.4 0L6.7 10.1a1 1 0 0 1 0-1.4Z" />
                  </svg>
                </button>

                <div
                  className={`grid gap-1 overflow-hidden transition-all duration-300 ${
                    servicesOpenMobile ? "max-h-[520px]" : "max-h-0"
                  }`}
                >
                  <div className="pt-1" />
                  {services.map((item) => (
                    <Link
                      to={item.link}
                      key={item.name}
                      className="rounded-xl px-4 py-3 ml-2 mr-1 bg-page/0 hover:bg-page transition-colors duration-200"
                    >
                      <p className="font-medium text-primary/90">{item.name}</p>
                      <p className="text-sm text-prigray">Learn more</p>
                    </Link>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    text="Let's talk"
                    style="bg-linear-to-tr from-gradient1 to-gradient2 text-white w-full justify-center"
                    color="#ffffff"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Nav_Bar;
