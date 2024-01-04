"use client";

import Image from "next/image";
import Logo from "../../../public/vet-logo.svg";
import Link from "next/link";

const navLinks: { name: string; anchor: string }[] = [
  { name: "Услуги клиники", anchor: "#services" },
  { name: "Ваши вопросы", anchor: "#faq" },
  { name: "Доктора", anchor: "#medics" },
  { name: "Галлерея", anchor: "#gallery" },
  { name: "Контакты", anchor: "#contacts" },
];

const Header = () => {
  return (
    <header className="container flex justify-between items-center mx-auto my-4">
      <Image src={Logo} alt="Vercel Logo" priority width={130} />

      <nav>
        <ul className="flex gap-8 text-xl">
          {navLinks.map((l) => (
            <li key={l.name} className="menu-item__hover">
              <Link href={l.anchor}>{l.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
