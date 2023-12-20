"use client";

import Link from "next/link";

const navLinks: { name: string; anchor: string }[] = [
  { name: "Услуги клиники", anchor: "#services" },
  { name: "Ваши вопросы", anchor: "#faq" },
  { name: "Доктора", anchor: "#medics" },
  { name: "Галлерея", anchor: "#gallery" },
  { name: "Контакты", anchor: "#contacts" },
];

const Navigation = () => {
  return (
    <ul className="flex gap-8 text-lg">
      {navLinks.map((l) => (
        <li key={l.name} className="menu-item__hover">
          <Link href={l.anchor}>{l.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
