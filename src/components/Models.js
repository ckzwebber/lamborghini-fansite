import React, { useState, useEffect } from "react";
import { Kinetic, Marquee } from "./Shared";
import Copybar from "./Copy";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";
import urus from "../assets/images/urus.jpg";

const MODELS = [
  {
    key: "huracan",
    name: "HURACÁN",
    tagline: "THE WIND AT FIVE-THIRTY",
    year: "2024",
    code: "LB / 724 · S T O",
    image: huracan,
    specs: {
      power: ["610", "CV"],
      speed: ["260", "KM/H"],
      zero:  ["3.4", "SEC"],
    },
  },
  {
    key: "revuelto",
    name: "REVUELTO",
    tagline: "THE FIRST OF A NEW ERA",
    year: "2024",
    code: "LB / 634 · H P E V",
    image: revuelto,
    specs: {
      power: ["1015", "CV"],
      speed: ["350", "KM/H"],
      zero:  ["2.5", "SEC"],
    },
  },
  {
    key: "urus",
    name: "URUS",
    tagline: "THE WEIGHT OF INTENT",
    year: "2024",
    code: "LB / 627 · S U V",
    image: urus,
    specs: {
      power: ["800", "CV"],
      speed: ["312", "KM/H"],
      zero:  ["3.4", "SEC"],
    },
  },
];

function Slide({ m, idx, total }) {
  return (
    <article className="slide">
      <aside className="slide__rail">
        <div>
          <div className="slide__index">
            <span className="gold">●</span>
            <span>N° {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          </div>
          <div className="slide__name-small">{m.code}</div>
        </div>
        <div className="slide__specs">
          <div className="spec spec--gold">
            <span className="spec__key">POWER</span>
            <span className="spec__val">
              {m.specs.power[0]}<span className="spec__unit">{m.specs.power[1]}</span>
            </span>
          </div>
          <div className="spec">
            <span className="spec__key">MAX SPEED</span>
            <span className="spec__val">
              {m.specs.speed[0]}<span className="spec__unit">{m.specs.speed[1]}</span>
            </span>
          </div>
          <div className="spec">
            <span className="spec__key">0 — 100</span>
            <span className="spec__val">
              {m.specs.zero[0]}<span className="spec__unit">{m.specs.zero[1]}</span>
            </span>
          </div>
        </div>
      </aside>

      <div className="slide__stage">
        <div className="slide__media">
          <img src={m.image} alt={m.name} />
          <h3 className="slide__nameplate">
            <Kinetic text={m.name} delay={200} stagger={45} />
          </h3>
        </div>
        <div className="slide__caption">
          <span>{m.year}</span>
          <span>{m.tagline}</span>
          <span>{m.code}</span>
        </div>
      </div>
    </article>
  );
}

export default function Models() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = MODELS.length;

  useEffect(() => {
    const DUR = 6000;
    const STEP = 50;
    let t = 0;
    const id = setInterval(() => {
      t += STEP;
      setProgress(Math.min(100, (t / DUR) * 100));
      if (t >= DUR) {
        t = 0;
        setProgress(0);
        setIdx(i => (i + 1) % total);
      }
    }, STEP);
    return () => clearInterval(id);
  }, [idx, total]);

  const go = n => { setIdx((n + total) % total); setProgress(0); };
  const m = MODELS[idx];

  return (
    <div className="page models">
      <div className="models__intro">
        <span className="models__eyebrow">● CHAPTER 02 — THE MACHINES</span>
        <h2 className="models__title"><em>Three</em> silhouettes, one language.</h2>
        <span className="models__count">0{idx + 1} / 0{total}</span>
      </div>

      <div className="slider">
        <div key={m.key} style={{ animation: "pageIn 600ms cubic-bezier(0.2,0.7,0.15,1)" }}>
          <Slide m={m} idx={idx} total={total} />
        </div>

        <div className="slider__controls">
          <button className="slider__btn slider__btn--prev" onClick={() => go(idx - 1)}>PREV</button>
          <div>
            <div className="slider__dots">
              {MODELS.map((mm, i) => (
                <React.Fragment key={mm.key}>
                  {i > 0 && (
                    <span style={{ color: "var(--hairline-strong)", padding: "0 10px" }}>/</span>
                  )}
                  <button
                    className={"slider__dot " + (i === idx ? "slider__dot--active" : "")}
                    onClick={() => go(i)}
                  >
                    0{i + 1} · {mm.name}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="slider__progress" style={{ marginTop: 14 }}>
              <div className="slider__progress-fill" style={{ width: progress + "%" }} />
            </div>
          </div>
          <button className="slider__btn slider__btn--next" onClick={() => go(idx + 1)}>NEXT</button>
        </div>
      </div>

      <div style={{ marginTop: 80 }}>
        <Marquee items={["HURACÁN", "REVUELTO", "URUS", "V10 · V12 · V8 BITURBO", "350 KM/H", "AUTOMOBILI LAMBORGHINI"]} />
      </div>

      <Copybar />
    </div>
  );
}
