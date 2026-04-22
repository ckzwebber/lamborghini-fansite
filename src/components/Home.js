import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Kinetic, CTA, Marquee } from "./Shared";
import Copybar from "./Copy";
import home1 from "../assets/images/home1.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page home">
      <div className="home__stage">
        <div className="home__hero-media" style={{ "--parallax": -parallax + "px" }}>
          <img src={home1} alt="" />
        </div>

        <div className="home__copy">
          <div className="home__overline">● LAMBORGHINI — THE PERFORMANCE EDITION</div>
          <h1 className="home__headline">
            <span className="line"><Kinetic text="UNLEASH" delay={200} /></span>
            <span className="line">
              <span className="em"><Kinetic text="the" delay={520} /></span>{" "}
              <Kinetic text="LEGACY" delay={680} />
            </span>
            <span className="line stroke"><Kinetic text="OF EXCELLENCE." delay={1100} /></span>
          </h1>
          <p className="home__sub">
            Born in 1963 in Sant'Agata Bolognese, Lamborghini has spent six decades redefining
            what a car can be. Three machines. One obsession: to push the limits of performance,
            design, and the human experience of speed.
          </p>
          <CTA label="SEE THE MODELS" onClick={() => navigate("/models")} />
        </div>

        <aside className="home__meta">
          <div className="home__meta-row">
            <span className="home__meta-key">FOUNDED</span>
            <span className="home__meta-val">1963 · ITALY</span>
          </div>
          <div className="home__meta-row">
            <span className="home__meta-key">MODELS</span>
            <span className="home__meta-val">03 MACHINES</span>
          </div>
          <div className="home__meta-row">
            <span className="home__meta-key">TOP V<sub style={{ letterSpacing: 0, fontSize: "0.7em" }}>max</sub></span>
            <span className="home__meta-val home__meta-val--num">
              350<span style={{ fontSize: 12, letterSpacing: "0.2em", marginLeft: 6, color: "var(--bone-dim)" }}>KM/H</span>
            </span>
          </div>
          <div className="home__meta-row">
            <span className="home__meta-key">0–100</span>
            <span className="home__meta-val home__meta-val--num">
              2.5<span style={{ fontSize: 12, letterSpacing: "0.2em", marginLeft: 6, color: "var(--bone-dim)" }}>SEC</span>
            </span>
          </div>
          <div className="home__meta-row">
            <span className="home__meta-key">ORIGIN</span>
            <span className="home__meta-val">SANT'AGATA B. — ITALY</span>
          </div>
        </aside>
      </div>

      <div className="home__bottom-marquee">
        <Marquee items={[
          "FUTURO — ORA", "V12 · 6498cc", "SCISSOR DOORS", "350 KM/H",
          "CARBON MONOCOQUE", "SANT'AGATA BOLOGNESE", "EST. 1963", "AUTOMOBILI LAMBORGHINI",
        ]} />
      </div>

      <Copybar />
    </div>
  );
}
