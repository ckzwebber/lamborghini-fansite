import React from "react";
import { Kinetic, Media, Marquee } from "./Shared";
import Copybar from "./Copy";
import aboutImg from "../assets/images/about.jpg";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";

function Chapter({ num, kicker, title, body, quote, aside, margin }) {
  return (
    <section className="chapter">
      <div className="chapter__num">{num}</div>
      <div className="chapter__body">
        <div className="chapter__kicker">{kicker}</div>
        <h3>{title}</h3>
        {body.map((p, i) => <p key={i}>{p}</p>)}
        {quote && <blockquote className="chapter__pullquote">{quote}</blockquote>}
      </div>
      <div className="chapter__aside">
        {aside.image
          ? <img src={aside.image} alt="" className="chapter__aside-img" />
          : <Media label={aside.label} tag={aside.tag} />
        }
        <div className="chapter__marginalia">
          {margin.map((row, i) => (
            <div key={i} className="chapter__marginalia-row">
              <span>{row[0]}</span><span>{row[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="page about">
      <header className="about__head">
        <h2>
          <Kinetic text="A legacy" delay={100} />{" "}
          <em><Kinetic text="in" delay={450} /></em>{" "}
          <Kinetic text="motion." delay={600} />
        </h2>
        <div className="about__head-meta">
          CH. 03 — ABOUT LAMBORGHINI<br />
          SANT'AGATA BOLOGNESE<br />
          EST. 1963
        </div>
      </header>

      <Chapter
        num="01"
        kicker="—  THE ORIGIN"
        title="Born from a tractor, shaped by rivalry."
        body={[
          "Ferruccio Lamborghini founded Automobili Lamborghini S.p.A. on May 7, 1963, in Sant'Agata Bolognese, Italy. A successful tractor manufacturer, he turned to building sports cars after a legendary dispute with Enzo Ferrari — who dismissed his complaint about a faulty clutch on his Ferrari 250 GT.",
          "That insult became an industry. The first Lamborghini, the 350 GT, debuted at the 1963 Turin Auto Show and announced a new force in Italian performance.",
        ]}
        quote="The tractor man built something that made Ferrari nervous."
        aside={{ image: aboutImg, label: "FERRUCCIO · SANT'AGATA", tag: "FIG. 01" }}
        margin={[
          ["FOUNDED", "07 MAY 1963"],
          ["LOCATION", "SANT'AGATA B."],
          ["FIRST MODEL", "350 GT"],
        ]}
      />

      <Chapter
        num="02"
        kicker="—  DESIGN PHILOSOPHY"
        title="The line is never decorative."
        body={[
          "Every Lamborghini is a geometric argument. Wedge profiles, sharp creases, and doors that cut upward rather than out — the iconic scissor mechanism debuted on the Countach in 1974 and has defined the brand's visual language ever since.",
          "The V10 in the Huracán, naturally aspirated to 8250 rpm, is a mechanical instrument. Its sound is a design decision as deliberate as its body lines.",
        ]}
        quote="Aggression is not a mood. It is a structural principle."
        aside={{ image: huracan, label: "HURACÁN · DESIGN", tag: "FIG. 02" }}
        margin={[
          ["LAYOUT", "MID-ENGINE RWD/AWD"],
          ["SIGNATURE", "SCISSOR DOORS"],
          ["ASPIRATION", "NATURALLY ASPIRATED"],
        ]}
      />

      <Chapter
        num="03"
        kicker="—  THE FUTURE"
        title="Hybrid power. Unchanged obsession."
        body={[
          "The Revuelto marks a watershed: the first V12 hybrid in Lamborghini history. Three electric motors join a revised 6.5-litre V12 to produce 1,015 CV — and 0–100 km/h in 2.5 seconds. The powertrain evolves; the intensity does not.",
          "The LANZADOR concept, unveiled in 2023, signals the brand's electric future — a 2+2 ultra-GT designed for the decade ahead.",
        ]}
        quote="Silence, when it arrives at 350 km/h, is a design decision."
        aside={{ image: revuelto, label: "REVUELTO · HYBRID V12", tag: "FIG. 03" }}
        margin={[
          ["HORIZON", "2030"],
          ["VECTOR", "V12 HYBRID + BEV"],
          ["CV", "1015 COMBINED"],
        ]}
      />

      <div className="about__closer">
        <div className="about__closer-mark">LAMBORGHINI</div>
      </div>

      <div style={{ marginTop: 0 }}>
        <Marquee items={[
          "FERRUCCIO · 1963", "COUNTACH", "DIABLO", "MURCIÉLAGO",
          "HURACÁN", "REVUELTO", "URUS", "LANZADOR",
        ]} />
      </div>

      <Copybar />
    </div>
  );
}
