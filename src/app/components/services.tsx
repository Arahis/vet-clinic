import React from "react";

const Services = () => {
  return (
    <div className="section-wrapper" id="services">
      <h2 className="font-accent text-6xl leading-tight font-semibold mb-32">
        Услуги нашей
        <br /> клиники
      </h2>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-8">
        <li className="services__item item__border border-orange-main">
          Хирургия
        </li>
        <li className="services__item item__border border-violet-main">
          Стоматология
        </li>
        <li className="services__item item__border border-yellow-main">
          Чипирование
        </li>
        <li className="services__item item__border border-green-main">
          Терапия
        </li>
        <li className="services__item item__border border-peach-main">
          Вакцинация
        </li>
        <li className="services__item item__border border-azure-main">УЗИ</li>
        <li className="services__item item__border border-blue-main">
          Лабораторные анализы
        </li>
        <li className="services__item">Другие наши услуги</li>
      </ul>
    </div>
  );
};

export default Services;
