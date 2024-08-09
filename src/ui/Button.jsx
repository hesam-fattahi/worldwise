const Button = ({ variant, children, className, icon, iconText, ...props }) => {
  const baseStyles =
    "py-2 px-5 focus:outline-none font-semibold transition duration-300 shadow-sm";
  const variants = {
    primary: " bg-green-600 text-zinc-50 hover:bg-green-700 rounded-lg",
    secondary: "bg-zinc-500 text-zinc-50 hover:bg-zinc-400 rounded-lg",
    icon: "bg-none text-xl aspect-square hover:bg-zinc-600 px-2.5 py-2.5 rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && (
        <>
          <span className="sr-only">{iconText}</span>
          <span className="mr-2">{icon}</span>
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
