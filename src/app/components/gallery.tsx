"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

const imgs = ["01", "02", "03", "04", "05", "06", "07", "08"];

const ImageWithRatio = ({ img }: { img: string }) => {
  const [ratio, setRatio] = useState<{
    naturalWidth: number;
    naturalHeight: number;
  }>({
    naturalWidth: 0,
    naturalHeight: 0,
  });

  return (
    <div
      className={classNames("relative shrink-0 h-[35vh]")}
      style={{ aspectRatio: `${ratio.naturalWidth}/${ratio.naturalHeight}` }}
    >
      <Image
        src={`/gallery/${img}.jpg`}
        alt=""
        fill
        className="object-cover"
        style={{ transform: "translate3d(0, 0, 0)" }}
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setRatio({ naturalWidth, naturalHeight });
        }}
        sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="pt-40 pb-60 bg-slate-50">
      <h2
        id="gallery"
        className="font-accent text-center text-5xl leading-tight font-semibold mb-32"
      >
        Галлерея
      </h2>
      <div className="gallery__container">
        <div className="flex gap-1">
          {imgs.map((img) => (
            <ImageWithRatio img={img} key={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
