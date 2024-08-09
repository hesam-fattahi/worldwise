const Footer = () => {
  return (
    <footer className="mt-auto">
      <p className="text-center text-sm font-semibold text-zinc-300 md:text-left">
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
};

export default Footer;
