import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import FAQ from "./components/faq";
import Gallery from "./components/gallery";
import Medics from "./components/medics";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Hero />
      {/* <FAQ /> */}
      {/* <Medics /> */}
      {/* <Gallery /> */}
    </main>
  );
}
