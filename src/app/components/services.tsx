import React from "react";

const Services = () => {
  return (
    <div id="services">
      <ul className="flex gap-8 items-start">
        <div className="grid gap-8 mt-20  flex-1">
          <li className="services__item item__border border-orange-main">
            Хирургия
          </li>
          <li className="services__item item__border border-violet-main">
            Стоматология
          </li>
          <li className="services__item item__border border-yellow-main">
            Чипирование
          </li>

          <li className="other-services__item">
            Другие наши услуги
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </li>
        </div>
        <div className="grid gap-8 flex-1">
          <li className="services__item item__border border-peach-main">
            Вакцинация
          </li>
          <li className="services__item item__border border-azure-main">УЗИ</li>
          <li className="services__item item__border border-blue-main">
            Анализы
          </li>
          <li className="services__item item__border border-green-main">
            Терапия
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Services;
