import React from "react";

export type variants = "title" | "subtitle" | "body" | "small" | "link";
export type families = "medium" | "regular" | "bold" | "semibold";
export type spacings = "normal" | "wide" | "wider" | "widest";

type TypographyProps = {
  label?: string | number;
  variant: variants;
  family?: families;
  color?: string;
  spacing?: spacings;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};
const Typography: React.FC<TypographyProps> = ({
  label,
  variant,
  family,
  color,
  spacing,
  className,
  onClick,
  children,
}) => {
  const twVariants = {
    title: "text-2xl",
    subtitle: "text-xl",
    body: "text-base",
    small: "text-xs",
    link: "text-base underline cursor-pointer",
  };
  const letterSpacing = `tracking-${spacing}`;

  const handlerOnClick = () => {
    typeof onClick === "function" && onClick();
  };

  return (
    <p
      onClick={handlerOnClick}
      className={`${twVariants[variant]} font-montserrat-${family} ${color}  ${letterSpacing} ${className}`}
    >
      {label}
      {children}
    </p>
  );
};

export default Typography;

Typography.defaultProps = {
  label: "",
  variant: "body",
  family: "medium",
  color: "text-dark",
  spacing: "normal",
};
