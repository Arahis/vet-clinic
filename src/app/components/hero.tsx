import React from "react";
import { BlobTop, Blobs } from "./blobsLayout";
import Services from "./services";

const Hero = () => {
  return (
    <div className="bg-slate-100 rounded-bl-3xl px-8 md:px-12 pt-20 relative min-h-[770px]">
      <div className="md:flex gap-20 mx-auto w-fit">
        <div className="basis-1/2">
          <h3 className="font-accent text-2xl md:text-3xl mb-8">
            Лечение домашних животных
          </h3>
          <h1 className="font-accent text-5xl md:text-7xl leading-tight font-semibold mb-14">
            Помощь животным <br />в быстрой <br />
            доступности <br />
          </h1>

          <a
            type="button"
            href="tel:+37379409456"
            className="p-8 md:px-16 md:py-6 text-2xl text-center leading-tight font-semibold w-full md:w-fit border-4 bg-white border-azure-main hover:bg-azure-main hover:text-white transition duration-300 ease-in-out rounded-bl-3xl"
          >
            Набрать клинику
          </a>
        </div>

        <Services />
      </div>
    </div>
  );
};

export default Hero;
