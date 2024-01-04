"use client";

import React from "react";

import Image from "next/image";
import Doctor1 from "../../../../public/panarin.svg";
import Doctor2 from "../../../../public/volobuev.svg";
import Doctor3 from "../../../../public/volobueva.svg";
import { BlobMedicOne, BlobMedicTwo, BlobMedicThree } from "./blobs";

const photos = [
  {
    picture: Doctor1,
    name: "Юрий Иванович Панарин",
    alt: "Iurie Panarin",
    blob: <BlobMedicOne />,
  },
  {
    picture: Doctor2,
    name: "Вадим Владимирович Волобуев",
    alt: "Vadim Volobuev",
    blob: <BlobMedicTwo />,
  },
  {
    picture: Doctor3,
    name: "Екатерина Юрьевна Волобуева",
    alt: "Ecaterina Volobueva",
    blob: <BlobMedicThree />,
  },
];

const Medics = () => {
  return (
    <div className="section-wrapper" id="medics">
      <ul className="grid grid-cols-3">
        {photos.map(({ name, picture, alt, blob }, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="aspect-square w-2/5 mb-4 relative flex justify-center items-center">
              <Image src={picture} alt={alt} className="bg-contain" />
              {blob}
            </div>
            <li>{name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Medics;
