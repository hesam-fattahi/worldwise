import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="py-8 px-4 flex flex-col md:p-8">
      <Logo small />
      <h1 className="mt-12 mb-4">
        Travel the world <br /> and don't lose track.
      </h1>
      <p className="text-zinc-100">
        Discover the amazing features of our product. It helps you manage your
        tasks efficiently and stay organized. Join us and experience the best
        productivity tool available.
      </p>
    </section>
  );
};

export default Hero;
