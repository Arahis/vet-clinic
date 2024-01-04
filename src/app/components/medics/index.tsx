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
    name: "Юрий Иванович",
    surname: "Панарин",
    role: "",
    alt: "Iurie Panarin",
    blob: <BlobMedicOne />,
  },
  {
    picture: Doctor2,
    name: "Вадим Владимирович",
    surname: "Волобуев",
    role: "",
    alt: "Vadim Volobuev",
    blob: <BlobMedicTwo />,
  },
  {
    picture: Doctor3,
    name: "Екатерина Юрьевна",
    surname: "Волобуева",
    role: "",
    alt: "Ecaterina Volobueva",
    blob: <BlobMedicThree />,
  },
];

const Medics = () => {
  return (
    <div className="section-wrapper" id="medics">
      <h2 className="font-accent text-center text-4xl leading-tight font-semibold mb-32">
        Врачи клиники
      </h2>
      <ul className="grid grid-cols-3">
        {photos.map(({ name, surname, picture, alt, blob }, i) => (
          <li key={i} className="flex flex-col items-center">
            <div className="aspect-square w-2/5 mb-12 relative flex justify-center items-center">
              <Image src={picture} alt={alt} className="bg-contain" />
              {blob}
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">{surname}</p>
              <p className="text-lg">{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medics;
