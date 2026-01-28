// import Image from "next/image";
"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import DoveAnimation from "./components/DoveAnimation";
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <DoveAnimation />
      <About />
      <Events />
      <Testimonials />
      {/* <Gallery /> */}
      <Offerings />
      <Contact />
      <Footer />
    </>
  );
}
