import Image from "next/image";
import Hero from "./Hero";
import ClientCarousel from "./ClientCarousel";
import { ServicesTabs } from "./ServicesTabs";
import SerTabs from "./SerTabs";
import AboutSection from "./AboutSection";


export default function Home() {
  return (
    <>
    <Hero />
    <ClientCarousel />
    <AboutSection />
    </>
  );
}
