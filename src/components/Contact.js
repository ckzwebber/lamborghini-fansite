import React from "react";
import { Kinetic } from "./Shared";
import Copybar from "./Copy";

const LINKS = [
  { num: "01", name: "WEBSITE",  handle: "lamborghini.com",             href: "https://www.lamborghini.com/en-en" },
  { num: "02", name: "YOUTUBE",  handle: "@lamborghini",                 href: "https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw" },
  { num: "03", name: "LINKEDIN", handle: "/automobili-lamborghini",      href: "https://www.linkedin.com/company/automobili-lamborghini-s-p-a-/" },
  { num: "04", name: "TIKTOK",   handle: "@lamborghini",                 href: "https://www.tiktok.com/@lamborghini?lang=en" },
];

function LinkRow({ num, name, handle, href }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer noopener">
      <span className="link__num">N° {num}</span>
      <span className="link__name">
        <span className="link__name-inner">
          <span>{name}</span>
          <span>{name}</span>
        </span>
      </span>
      <span className="link__handle">{handle}</span>
      <span className="link__arrow" />
    </a>
  );
}

export default function Contact() {
  return (
    <div className="page contact">
      <header className="contact__head">
        <h2>
          <Kinetic text="Contact" delay={100} /><br />
          <em><Kinetic text="the" delay={500} /></em>{" "}
          <Kinetic text="marque." delay={650} />
        </h2>
        <p>
          Official channels of Automobili Lamborghini S.p.A. — these links lead off-site to the
          manufacturer's own platforms. This fan study has no affiliation with any of them.
        </p>
      </header>

      <nav className="links">
        {LINKS.map(l => <LinkRow key={l.num} {...l} />)}
      </nav>

      <footer className="contact__footer">
        <span>
          TO REACH THE CREATOR OF THIS STUDY —{" "}
          <a href="https://webberportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            PORTFOLIO
          </a>
          {" "}·{" "}
          <a href="https://github.com/ckzwebber" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
        </span>
        <span>END OF CHAPTER 04 · FADE TO BLACK</span>
      </footer>

      <Copybar />
    </div>
  );
}
