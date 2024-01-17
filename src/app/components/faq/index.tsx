"use client";

import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { useAnswer, useSetAnswer } from "../../libs/useAnswer";
import SectionTitle from "../section-title";
import { faqs } from "./faq-data";

const QuestionTitle = ({
  children,
  id,
}: PropsWithChildren & { id: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setAnswer = useSetAnswer();
  const qId = useAnswer();

  useEffect(() => {
    if (isInView) {
      setAnswer(id);
    }
    if (!isInView && id === qId) {
      setAnswer(null);
    }
  }, [isInView, setAnswer, qId, id]);

  return (
    <p
      ref={ref}
      className={classNames(
        "text-2xl md:text-4xl py-6 md:py-24 transition-colors font-medium",
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
  const answerId = useAnswer();

  return (
    <div
      className={classNames(
        "absolute h-full w-full text-lg md:text-xl p-4 sm:p-8 xl:p-20 transition-opacity inset-0 bg-gradient-to-br",
        gradient,
        answerId === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="section-wrapper">
      <SectionTitle>Частые вопросы</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:items-start gap-8 relative">
        <ul className="max-w-sm selection:py-[20vh] md:py-[50vh] w-full">
          {faqs.map(({ title, id }) => (
            <li key={id}>
              <QuestionTitle id={id}>{title}</QuestionTitle>
            </li>
          ))}
        </ul>
        <div className="w-full p-4 sticky bottom-0 left-0  md:top-0 flex md:h-screen place-items-center ">
          <div
            id="faq"
            className="relative max-w-sm w-full ml-auto md:max-w-[unset] aspect-square bg-slate-200 rounded-xl overflow-hidden "
          >
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
