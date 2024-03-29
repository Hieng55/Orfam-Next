import { cva } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  types?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const variantsStylesInput = cva(["border-2 border-gray-400 text-base pl-4 outline-none rounded-md "], {
  variants: {
    types: {
      primary: "focus:border-blue-500",
      secondary: "focus:border-gray-500",
      success: "focus:border-green-ct5",
      warning: "focus:border-yellow-500",
      error: "focus:border-red-500",
    },
    size: {
      sm: "py-3",
      md: "py-4",
      lg: "py-5",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    types: "primary",
    size: "sm",
  },
});

const InputForm = forwardRef<HTMLInputElement, Props>(({ className, types = "primary", size = "sm", fullWidth, ...rest }, ref) => {
  const classStyles = variantsStylesInput({
    className,
    types,
    size,
    fullWidth,
  });

  return <input {...rest} ref={ref} className={cn(classStyles, className)} />;
});
InputForm.displayName = "Input";

export default InputForm;
