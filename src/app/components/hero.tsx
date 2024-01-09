import React from "react";
import { Blobs } from "./blobsLayout";
import Services from "./services";

const Hero = () => {
  return (
    <div className="section-wrapper flex gap-20 relative ">
      <div className="basis-1/2">
        <h3 className="font-accent text-3xl mb-8">Лечение домашних животных</h3>
        <h1 className="font-accent text-7xl leading-tight font-semibold mb-14">
          Помощь животным <br />в быстрой <br />
          доступности <br />
          <span className="font-accent text-5xl leading-tight font-semibold mb-14 text-orange-main w-fit">
            <a href="tel:+37379409456">(+373) 79 409 456</a>
          </span>
        </h1>
      </div>

      <div className="relative right-0">
        <Services />
      </div>
    </div>
  );
};

export default Hero;
