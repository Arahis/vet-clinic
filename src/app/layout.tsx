import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import Logo from "../../public/vet-logo.svg";
import Link from "next/link";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import { BlobBottom, BlobSide, BlobTop } from "./libs/blobs";

const inter = Inter({ subsets: ["latin"], variable: "--main-font" });
const IBM = IBM_Plex_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--accent-font",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}, ${IBM.variable}`}>
        <div className="container flex justify-between items-center mx-auto">
          <BlobTop />
          <BlobSide />
          <Image src={Logo} alt="Vercel Logo" priority width={130} />
          <Navigation />
          <BlobBottom />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
