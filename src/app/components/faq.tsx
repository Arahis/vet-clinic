"use client";

import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { v1 as uuid } from "uuid";
import { useImage, useSetImage } from "../libs/useAnswer";

const faqs = [
  {
    title: "В каком возврасте вакцинировать животное?",
    answer:
      "Согласно данной схеме, вакцинация щенка до года может быть проведена в два или три этапа, в зависимости от возраста, в котором была проведена первая прививка.",
    id: uuid(),
    gradient: "from-[#A5E2E4] to-[#E1FDFB]",
  },
  {
    title: "В каком возврасте кастрировать животное?",
    answer: "Ответ на вопрос  в каком возврасте кастрировать животное",
    id: uuid(),
    gradient: "from-[#A6AAE4] to-[#E1FDFB]",
  },
  {
    title: "Когда принимать препараты от глистов и как часто?",
    answer: "3",
    id: uuid(),
    gradient: "from-[#F5B2A0] to-[#F78263]",
  },
  {
    title: "Чем кормить домашних животных?",
    answer: "4",
    id: uuid(),
    gradient: "from-[#EAF8E5] to-[#BAE4A5]",
  },
  {
    title: "Сколько стоят услуги и медикаменты?",
    answer: "5",
    id: uuid(),
    gradient: "from-[#FFF8CC] to-[#FFEF88]",
  },
  {
    title: "Приезжаете ли вы на дом?",
    answer: "6",
    id: uuid(),
    gradient: "from-[#A5E2E4] to-[#A0D6F5]",
  },
];

const QuestionTitle = ({
  children,
  id,
}: PropsWithChildren & { id: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setImage = useSetImage();
  const qId = useImage();

  useEffect(() => {
    if (isInView) {
      setImage(id);
    }
    if (!isInView && id === qId) {
      setImage(null);
    }
  }, [isInView, setImage, qId, id]);

  return (
    <p
      ref={ref}
      className={classNames(
        "text-4xl py-24 transition-colors font-medium",
        isInView ? "text-black" : "text-slate-200"
      )}
    >
      {children}
    </p>
  );
};

const AnswerText = ({
  children,
  id,
  gradient,
}: PropsWithChildren & { id: string; gradient: string }) => {
  const imageId = useImage();

  return (
    <div
      className={classNames(
        "absolute h-full w-full text-xl p-8 transition-opacity inset-0 bg-gradient-to-br",
        gradient,
        imageId === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="section-wrapper" id="faq">
      <div className="flex w-full items-start gap-8">
        <ul className="py-[50vh] w-full">
          {faqs.map(({ title, id }) => (
            <li key={id}>
              <QuestionTitle id={id}>{title}</QuestionTitle>
            </li>
          ))}
        </ul>
        <div className="w-full sticky top-0 flex h-screen place-items-center ">
          <div className="relative w-full aspect-square bg-slate-200 rounded-xl overflow-hidden ">
            {faqs.map(({ answer, id, gradient }) => (
              <AnswerText key={id} id={id} gradient={gradient}>
                {answer}
              </AnswerText>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
