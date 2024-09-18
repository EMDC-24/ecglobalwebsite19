import Image from "next/image";
import Hero from "./Hero";
import ClientCarousel from "./ClientCarousel";
import { ServicesTabs } from "./ServicesTabs";

export default function Home() {
  return (
    <>
    <Hero />
    <ClientCarousel />
    <ServicesTabs />
    </>
  );
}
