import React from "react";
import { BlobTop, Blobs } from "./blobsLayout";
import Services from "./services";

const Hero = () => {
  return (
    <div className="bg-slate-100 rounded-bl-3xl px-12 pt-20 relative min-h-[770px]">
      <div className="flex gap-20 mx-auto w-fit">
        <div className="basis-1/2">
          <h3 className="font-accent text-3xl mb-8">
            Лечение домашних животных
          </h3>
          <h1 className="font-accent text-7xl leading-tight font-semibold mb-14">
            Помощь животным <br />в быстрой <br />
            доступности <br />
          </h1>

          <a
            type="button"
            href="tel:+37379409456"
            className="text-2xl leading-tight font-semibold px-16 py-6 w-fit border-4 bg-white border-azure-main hover:bg-azure-main hover:text-white transition duration-300 ease-in-out rounded-bl-3xl"
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
