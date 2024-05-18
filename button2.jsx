// src/components/Button.jsx
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  ["flex", "items-center", "justify-center", "transition-colors", "text-white"],
  {
    variants: {
      variant: {
        primary: ["bg-blue-500", "hover:bg-blue-700"],
        secondary: ["bg-green-500", "hover:bg-green-700"],
        tertiary: ["bg-orange-500", "hover:bg-orange-700"],
      },
      size: {
        default: ["rounded", "w-20", "h-20", "p-2"],
        button: ["rounded", "h-10", "w-32"],
        icon: ["rounded-full", "w-20", "h-20", "p-2.5"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// type ButtonProps = VariantProps<typeof buttonStyles> &
//   React.ComponentProps<"button">;
// use this type for .tsx files

const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
