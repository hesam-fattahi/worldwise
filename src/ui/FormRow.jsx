const Input = ({ children, label, error }) => {
  return (
    <div className="mb-2 relative">
      {label && (
        <label className="block mb-1 text-sm font-semibold">{label}</label>
      )}
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
