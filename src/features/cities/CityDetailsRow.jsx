const CityRow = ({ children, title }) => {
  return (
    <div className="space-y-0.5">
      <h6 className="uppercase text-zinc-300 text-xs font-semibold">{title}</h6>
      {children}
    </div>
  );
};

export default CityRow;
