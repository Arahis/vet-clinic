import React from "react";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-slate-50">
      <div className="footer-wrapper bg-slate-200 rounded-t-xl">
        <div className="flex justify-between mb-8 gap-8">
          <div className="basis-1/3">
            <h3 className="footer-section-title">Контакты</h3>
            <p className="text-xl">
              <a href="tel:+37379409456">+373 79 409 456</a>
            </p>

            <p className="text-xl">
              <a
                href="https://maps.app.goo.gl/dG71hTc1DtWgcaZb6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Кишинев, бул. Куза-Водэ 37
              </a>
            </p>
          </div>

          <div className="basis-1/4">
            <h3 className="footer-section-title">Рабочие часы</h3>
            <ul>
              <li className="flex justify-between">
                <div className="text-xl">Пн - Пт:</div>
                <div className="text-xl">09:30–17:00</div>
              </li>
              <li className="flex justify-between">
                <div className="text-xl">Суббота:</div>
                <div className="text-xl">09:30–13:30</div>
              </li>
              <li className="flex justify-between ">
                <div className="text-xl">Воскресенье:</div>
                <div className="text-xl">Выходной</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-2 border border-t-slate-300">
          <p className="text-slate-500 text-sm">
            Copyright © {new Date().getFullYear()} | by BeeDee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
