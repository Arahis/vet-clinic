import React from "react";
import ArrowRight from "./icons/arrow-right";
import SectionTitle from "./section-title";

const Services = () => {
  return (
    <div id="services" className="mt-32 md:m-0">
      <SectionTitle hidden>Услуги клиники</SectionTitle>
      <ul className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="grid gap-8 md:flex-1">
          <li className="services__item item__border border-peach-main">
            <p>Вакцинация</p>
          </li>
          <li className="services__item item__border border-azure-main">
            <p>УЗИ</p>
          </li>
          <li className="services__item item__border border-blue-main">
            <p>Анализы</p>
          </li>
          <li className="services__item item__border border-green-main">
            <p>Терапия</p>
          </li>
        </div>

        <div className="grid gap-8 md:mt-20 md:flex-1">
          <li className="services__item item__border border-orange-main">
            <p>Хирургия</p>
          </li>
          <li className="services__item item__border border-violet-main">
            <p>Стоматология</p>
          </li>
          <li className="services__item item__border border-yellow-main">
            <p>Чипирование</p>
          </li>

          <li className="other-services__item flex items-center">
            <p>Другие наши услуги</p>
            <ArrowRight />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Services;
