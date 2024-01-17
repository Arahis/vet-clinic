import Hero from "./components/hero";
import FAQ from "./components/faq";
import Gallery from "./components/gallery";
import Medics from "./components/medics";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 md:gap-80">
      <Hero />
      <FAQ />
      <Medics />
      <Gallery />
    </main>
  );
}
