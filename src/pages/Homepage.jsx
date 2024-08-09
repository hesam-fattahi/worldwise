import Login from "../features/authentication/Login";
import Hero from "../ui/Hero";

const Homepage = () => {
  return (
    <div className="min-h-screen p-4 grid place-items-center bg-page-background bg-center bg-cover">
      <main className="bg-zinc-300 bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 divide-y divide-zinc-500 md:grid-cols-2 md:divide-x md:divide-y-0 md:p-8">
        <Hero />
        <Login />
      </main>
    </div>
  );
};

export default Homepage;
