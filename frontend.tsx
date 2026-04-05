import React from "react";
import { createRoot } from "react-dom/client";
import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { Projects } from "./components/Projects";
import { AIWorkflow } from "./components/AIWorkflow";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <WhatIDo />
      <Projects />
      <AIWorkflow />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
