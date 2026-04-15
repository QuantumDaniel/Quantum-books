import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutBook } from "./components/AboutBook";
import { WhatYoullLearn } from "./components/WhatYoullLearn";
import { AboutAuthor } from "./components/AboutAuthor";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import Videos from "./components/Videos";
import Video2 from "./components/Video2";




export default function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutBook />
      <Videos />
      <Video2 />
      <WhatYoullLearn />
      <AboutAuthor />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}