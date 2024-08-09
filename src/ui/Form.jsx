const Form = ({ children, className, ...props }) => {
  return (
    <form
      className={`flex flex-col gap-4 p-6 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
