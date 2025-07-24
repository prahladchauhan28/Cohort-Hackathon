import { useEffect, useState } from "react";
import  Navigation  from "../components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "./About";
import { Players } from "./Players";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Gallery from "../components/Gallary";
import SiteLoader from "../components/ui-comp/Loader";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Set dark mode by default for gaming theme
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      {!isLoaded ? (
        <SiteLoader onComplete={() => setIsLoaded(true)} />
      ) : <div className="min-h-screen bg-s8ul-dark">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Players />
        <Gallery/>
        <Contact />
      </main>
      <Footer />
    </div> }
    </>
  );
}
