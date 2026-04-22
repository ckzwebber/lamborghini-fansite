import React from "react";

export function Kinetic({ text, delay = 0, stagger = 35 }) {
  const words = text.split(" ");
  let i = 0;
  return (
    <span className="kinetic" aria-label={text}>
      {words.map((w, wi) => (
        <span className="kinetic__w" key={wi}>
          {[...w].map((ch, ci) => {
            const d = delay + i++ * stagger;
            return (
              <span key={ci} className="kinetic__ch" style={{ animationDelay: d + "ms" }}>
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export function Media({ label, tag, style, className = "" }) {
  return (
    <div className={"media " + className} style={style}>
      <span className="media__label">{label}</span>
      <span className="media__crosshair" />
      {tag && <span className="media__tag">{tag}</span>}
    </div>
  );
}

export function FrameChrome({ routeKey, time }) {
  const pages = [
    ["home",    "01", "HOME"],
    ["models",  "02", "MODELS"],
    ["about",   "03", "ABOUT"],
    ["contact", "04", "CONTACT"],
  ];
  const cur = pages.find(p => p[0] === routeKey) || pages[0];
  return (
    <>
      <div className="frame frame--top">
        <div className="frame__group">
          <span><span className="dot" />AUTOMOBILI LAMBORGHINI S.P.A.</span>
          <span className="frame__group--hide-mobile">SANT'AGATA BOLOGNESE · EST. 1963</span>
        </div>
        <div className="frame__group">
          <span className="frame__group--hide-mobile">V12 · 6498cc · 1015 CV</span>
          <span>TC {time}</span>
        </div>
      </div>
      <div className="frame-rule frame-rule--top" />
      <div className="frame frame--bottom">
        <div className="frame__group">
          <span>CH. {cur[1]} — {cur[2]}</span>
          <span className="frame__group--hide-mobile">LAT 44.6479° N · LON 10.9368° E</span>
        </div>
        <div className="frame__group">
          <span className="frame__group--hide-mobile">COLOR · GRADED</span>
          <span>
            {String(pages.findIndex(p => p[0] === routeKey) + 1).padStart(2, "0")} / {pages.length}
          </span>
        </div>
      </div>
      <div className="frame-rule frame-rule--bottom" />
    </>
  );
}

export function Marquee({ items }) {
  const row = (
    <span className="marquee__item">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span className={i % 3 === 1 ? "marquee__ghost" : ""}>{it}</span>
          <span className="marquee__dot" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee__track">{row}{row}{row}</div>
    </div>
  );
}

export function CTA({ label = "SEE THE MODELS", onClick }) {
  return (
    <button className="cta" onClick={onClick}>
      <span className="cta__label">
        <span>{label}</span>
        <span>{label}</span>
      </span>
      <span className="cta__arrow" />
      <span className="cta__rule" />
    </button>
  );
}

export function Disclaimer({ onClose }) {
  return (
    <div className="disclaim" onClick={onClose}>
      <div className="disclaim__box" onClick={e => e.stopPropagation()}>
        <span className="disclaim__tag">● DISCLAIMER</span>
        <h3 className="disclaim__title">Unofficial fan study.</h3>
        <p className="disclaim__body">
          This is an independent, non-commercial student project. It is not affiliated with,
          endorsed by, or sponsored by Automobili Lamborghini S.p.A. All images, model names,
          and trademarks are property of Lamborghini. Visit the official website{" "}
          <a href="https://www.lamborghini.com/en-en" target="_blank" rel="noopener noreferrer">
            lamborghini.com
          </a>
          . Created by{" "}
          <a href="https://webberportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            Carlos Miguel
          </a>
          .
        </p>
        <div className="disclaim__actions">
          <span>PRESS ESC OR CLICK OUTSIDE</span>
          <button className="disclaim__btn" onClick={onClose}>ENTER →</button>
        </div>
      </div>
    </div>
  );
}
