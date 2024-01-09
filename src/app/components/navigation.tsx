import Link from "next/link";

const navLinks: { name: string; anchor: string }[] = [
  { name: "Контакты", anchor: "#contacts" },
  { name: "Галлерея", anchor: "#gallery" },
  { name: "Доктора", anchor: "#medics" },
  { name: "Ваши вопросы", anchor: "#faq" },
  { name: "Услуги клиники", anchor: "#services" },
];

const Navigation = () => {
  return (
    <nav className="flex rounded-tr-3xl rotate-90 origin-top-left absolute top-0 bg-slate-100 h-[100px] left-[100px] justify-center items-center">
      <ul className="flex gap-8 text-xl p-8">
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
