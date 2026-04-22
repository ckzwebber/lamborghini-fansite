import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LOGO = "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/models",  label: "MODELS",  num: "01" },
    { to: "/about",   label: "ABOUT",   num: "02" },
    { to: "/contact", label: "CONTACT", num: "03" },
  ];

  return (
    <nav className={"nav " + (scrolled ? "nav--scrolled" : "")}>
      <NavLink to="/" end className="brand">
        <img src={LOGO} alt="Lamborghini" className="brand__logo" />
        <span className="brand__sub">FAN STUDY · EST. 2024</span>
      </NavLink>
      <div className="nav__links">
        {links.map(({ to, label, num }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
          >
            <span className="nav__num">{num}</span>{label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
