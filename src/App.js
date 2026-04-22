import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/App.css";
import "./styles/pages.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Models from "./components/Models";
import About from "./components/About";
import Contact from "./components/Contact";
import { FrameChrome, Disclaimer } from "./components/Shared";

function pad(n) { return String(n).padStart(2, "0"); }
function fmtTC(d) {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${pad(Math.floor(d.getMilliseconds() / 10))}`;
}

function App() {
  const location = useLocation();
  const [disclaim, setDisclaim] = useState(() => !localStorage.getItem("apex.disclaim"));
  const [tc, setTc] = useState(fmtTC(new Date()));

  const routeKey = location.pathname === "/" ? "home" : location.pathname.slice(1);

  useEffect(() => {
    const id = setInterval(() => setTc(fmtTC(new Date())), 50);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape" && disclaim) closeDisclaim(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [disclaim]);

  const closeDisclaim = () => {
    localStorage.setItem("apex.disclaim", "1");
    setDisclaim(false);
  };

  return (
    <>
      <div className="grain" />
      <div className="vignette" />
      <FrameChrome routeKey={routeKey} time={tc} />
      <Nav />
      <main style={{ position: "relative", overflow: "hidden" }}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={400}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      {disclaim && <Disclaimer onClose={closeDisclaim} />}
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
