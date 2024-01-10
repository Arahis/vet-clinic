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
    <nav className="flex rounded-tr-3xl rotate-90 origin-top-left absolute top-0 bg-slate-100 h-28 left-28 justify-center items-center min-w-[770px]">
      <ul className="flex gap-8 text-xl p-8 justify-center">
        {navLinks.map((l) => (
          <li key={l.name} className="menu-item__hover">
            <Link href={l.anchor}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
