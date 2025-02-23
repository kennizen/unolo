import { InputHTMLAttributes, ReactNode } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
}

export const CustomInput = ({ startIcon, ...rest }: IProps) => {
  return (
    <div className="flex items-center rounded-lg border pl-2">
      {startIcon ? startIcon : <></>}
      <Input
        {...rest}
        className={cn(
          "border-none shadow-none outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0",
          rest.className,
        )}
      />
    </div>
  );
};
