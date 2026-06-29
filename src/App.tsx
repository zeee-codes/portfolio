import { useEffect, useState } from "react";
import Lenis from "lenis";
import CanvasContainer from "./components/scene/CanvasContainer";
import CustomCursor from "./components/common/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import WhyHire from "./components/ui/WhyHire";
import About from "./components/ui/About";
import Skills from "./components/ui/Skills";
import Projects from "./components/ui/Projects";
import Experience from "./components/ui/Experience";
import Contact from "./components/ui/Contact";
import BootScreen from "./components/ui/BootScreen";
import PreferenceDock from "./components/ui/PreferenceDock";
import { portfolioData } from "./data/portfolio";

const App = () => {
  const storageKeys = {
    skipBoot: "portfolio.skipBoot",
    reduceMotion: "portfolio.reduceMotion",
    pause3d: "portfolio.pause3d",
  };

  const getStoredBoolean = (key: string, fallback = false) => {
    if (typeof window === "undefined") return fallback;
    const value = window.localStorage.getItem(key);
    if (value === null) return fallback;
    return value === "true";
  };

  const getPrefersReducedMotion = () => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const [booted, setBooted] = useState(() =>
    getStoredBoolean(storageKeys.skipBoot, false)
  );
  const [reduceMotion, setReduceMotion] = useState(() =>
    getStoredBoolean(storageKeys.reduceMotion, getPrefersReducedMotion())
  );
  const [pause3d, setPause3d] = useState(() =>
    getStoredBoolean(storageKeys.pause3d, false)
  );

  const handleDisableBoot = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKeys.skipBoot, "true");
    }
    setBooted(true);
  };

  useEffect(() => {
    document.body.style.overflow = booted ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [booted]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKeys.reduceMotion, String(reduceMotion));
  }, [reduceMotion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKeys.pause3d, String(pause3d));
  }, [pause3d]);

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  return (
    <main className="app-shell">
      {!booted && (
        <BootScreen onComplete={() => setBooted(true)} onDisable={handleDisableBoot} />
      )}
      <CustomCursor />
      <CanvasContainer paused={pause3d} reduceMotion={reduceMotion} />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="ui-layer">
        <Navbar
          sections={portfolioData.navigation}
          resumeUrl={portfolioData.profile.resumeUrl}
        />
        <PreferenceDock
          reduceMotion={reduceMotion}
          onToggleMotion={() => setReduceMotion((prev) => !prev)}
          pause3d={pause3d}
          onToggle3d={() => setPause3d((prev) => !prev)}
        />
        <Hero profile={portfolioData.profile} contact={portfolioData.contact} />
        <WhyHire items={portfolioData.profile.whyHire} />
        <About profile={portfolioData.profile} />
        <Skills categories={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience timeline={portfolioData.experience} />
        <Contact
          contact={portfolioData.contact}
          resumeUrl={portfolioData.profile.resumeUrl}
        />
      </div>
    </main>
  );
};

export default App;
