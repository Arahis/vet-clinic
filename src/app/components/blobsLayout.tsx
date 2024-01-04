import { BlobOne, BlobThree, BlobTwo } from "../libs/blobs";

const BlobTop = () => (
  <div
    id="blob"
    className="w-[900px] absolute top-[-300px] left-20 -z-10 fill-[var(--secondary-color)]"
  >
    <BlobOne />
  </div>
);

const BlobBottom = () => (
  <div className="w-[1000px] absolute -z-10 -left-80 top-[600px] fill-[var(--primary-color)]">
    <BlobTwo />
  </div>
);

const BlobSide = () => (
  <div className="w-[1200px] absolute -z-10 -right-80 top-48 fill-[#fff8cc]">
    <BlobThree />
  </div>
);

export const Blobs = () => (
  <>
    <BlobTop />
    <BlobSide />
    <BlobBottom />
  </>
);
