import React from "react";
import Navbar from "./navbar";
import Welcome from "./welcome";
import Species from "./species";
import Club from "./club";
import Bathroom from "./bathroom";
import Roadmap from "./roadmap";
import Community from "./community";
import Team from "./team";
import Footer from "./footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Species />
      <Club />
      <Bathroom />
      <Roadmap />
      <Community />
      <Team />
      <Footer />
    </>
  );
}
