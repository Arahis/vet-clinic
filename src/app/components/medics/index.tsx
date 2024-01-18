"use client";

import React from "react";

import Image from "next/image";
import Doctor1 from "../../../../public/panarin.svg";
import Doctor2 from "../../../../public/volobuev.svg";
import Doctor3 from "../../../../public/volobueva.svg";
import { BlobMedicOne, BlobMedicTwo, BlobMedicThree } from "./blobs";
import SectionTitle from "../section-title";

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
      <SectionTitle>Врачи клиники</SectionTitle>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(({ name, surname, picture, alt, blob }, i) => (
          <li key={i} className="flex flex-col items-center">
            <div className="aspect-square w-3/5 lg:w-2/5 mb-8 lg:mb-12 relative flex justify-center items-center">
              <Image src={picture} alt={alt} className="bg-contain" />
              {blob}
            </div>
            <div className="text-center md:text-lg">
              <p className="font-semibold">{surname}</p>
              <p>{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medics;
