import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes } from "react";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1  tex-gray-100 text-xs outline-none placeholder: text-gray-400 "
      {...props}
    />
  );
}

export interface TextInputIconProps {
  children: React.ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}


export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within: ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
