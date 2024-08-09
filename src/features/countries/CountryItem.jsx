const CountryItem = ({ country }) => {
  return (
    <li className="flex-1 text-lg font-semibold grid place-items-center gap-4 bg-zinc-600 p-6 rounded-lg">
      <span className="leading-none text-3xl">{country.emoji}</span>
      <span className="text-zinc-200 text-center">{country.country}</span>
    </li>
  );
};

export default CountryItem;
