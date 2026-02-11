import React from "react";
import * as Slot from "@radix-ui/react-slot";
import "./Button.css";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className"
> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  asChild = false,
  className,
  ...restProps
}) => {
  const Comp = asChild ? Slot.Root : "button";

  // variant나 size가 없으면 className만 사용 (완전한 유연성)
  // variant/size가 있으면 기본 클래스명 생성
  const baseClasses =
    variant || size
      ? ["button", variant && `button--${variant}`, size && `button--${size}`]
          .filter(Boolean)
          .join(" ")
      : "button";

  const combinedClassName = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <Comp className={combinedClassName} {...restProps}>
      {children}
    </Comp>
  );
};

export default Button;
