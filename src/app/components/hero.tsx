import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="section-wrapper flex">
      <div className="basis-2/5">
        <h3 className="font-accent text-3xl mb-8">Лечение домашних животных</h3>
        <h1 className="font-accent text-7xl leading-tight font-semibold mb-14">
          Ваши любимые в надёжных руках
        </h1>
        <p className="text-lg">
          Окажем помощь вашему питомцу с должной заботой от квалифицированных
          специалистов
        </p>
      </div>

      {/* Hero image */}
      <div className="relative">
        {/* <div className="opacity-30 absolute">
          <Image src="/catdog.svg" alt="hero-catdog" width="800" height="800" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
