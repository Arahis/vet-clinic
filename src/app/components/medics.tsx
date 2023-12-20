import React from "react";
import Image from "next/image";
import Doctor1 from "../../../public/volobuev.png";
import Doctor2 from "../../../public/volobuev.png";
import Doctor3 from "../../../public/volobueva.png";

const photos = [
  { picture: Doctor1, name: "Юрий Иванович Панарин", alt: "Iurie Panarin" },
  {
    picture: Doctor2,
    name: "Вадим Владимирович Волобуев",
    alt: "Vadim Volobuev",
  },
  {
    picture: Doctor3,
    name: "Екатерина Юрьевна Волобуева",
    alt: "Ecaterina Volobueva",
  },
];

const Doctors = () => {
  return (
    <div className="section-wrapper" id="medics">
      <ul className="grid grid-cols-3">
        {photos.map(({ name, picture, alt }, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="aspect-square w-2/4 rounded-full overflow-hidden mb-4">
              <Image src={picture} alt={alt} className="bg-contain" />
            </div>
            <li>{name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
