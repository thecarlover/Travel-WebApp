import Camp from "@/components/Camp";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { FEATURES } from "@/constants";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <Footer />
    </>
  );
}
