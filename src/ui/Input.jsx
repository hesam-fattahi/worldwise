import { forwardRef } from "react";

const Input = forwardRef(({ type = "text", error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`py-2 px-4 rounded-md bg-transparent border  focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${
        error ? "border-red-500" : "border-zinc-400"
      }`}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
