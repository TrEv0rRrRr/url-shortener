import type { ButtonHTMLAttributes } from "react";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = "primary", text, ...props }: Props) => {
  const primaryStyles = "px-6 rounded-4xl self-center";
  const secondaryStyles = "w-full rounded-md";

  const buttonStyle = variant === "primary" ? primaryStyles : secondaryStyles;
  const buttonType = variant === "primary" ? "button" : "submit";

  return (
    <button
      {...props}
      className={`bg-brand-cyan text-white py-2.5 
      text-bold cursor-pointer hover:bg-brand-cyan/80 transition-all duration-300 ease-in-out ${buttonStyle} ${
        props.className ?? ""
      }`}
      type={props.type ?? buttonType}
    >
      {text}
    </button>
  );
};

export default Button;
