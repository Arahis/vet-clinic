import { BlobOne, BlobThree, BlobTwo } from "@/app/libs/blobs";

export const BlobMedicOne = () => (
  <div
    id="blob"
    className="w-[40vw] md:w-[300px] absolute -z-10 fill-[var(--secondary-color)]"
  >
    <BlobOne />
  </div>
);

export const BlobMedicTwo = () => (
  <div className="w-[40vw] md:w-[300px] absolute -z-10 fill-[#fff8cc]">
    <BlobTwo />
  </div>
);

export const BlobMedicThree = () => (
  <div className="w-[40vw] md:w-[300px] absolute -z-10 fill-[var(--primary-color)]">
    <BlobThree />
  </div>
);
