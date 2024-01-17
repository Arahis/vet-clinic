import classNames from "classnames";
import React, { ComponentProps, PropsWithChildren } from "react";

const SectionTitle = ({
  children,
  ...props
}: ComponentProps<"hgroup"> & { hidden?: boolean }) => {
  return (
    <h2
      className={classNames(
        "font-accent text-center text-3xl leading-tight font-semibold my-12 md:mb-32 md:text-5xl",
        props.hidden && "md:hidden"
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
