import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import FAQ from "./components/faq";
import Doctors from "./components/medics";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Hero />
      <Services />
      <FAQ />
      <Doctors />
      <Gallery />
    </main>
  );
}
