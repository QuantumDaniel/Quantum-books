import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutBook } from "./components/AboutBook";
import { WhatYoullLearn } from "./components/WhatYoullLearn";
import { AboutAuthor } from "./components/AboutAuthor";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";




export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutBook />
      <WhatYoullLearn />
      <AboutAuthor />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}