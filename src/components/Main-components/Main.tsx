import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Button from './components/ui/Button';

const Main = () => {
  return <main className="flex flex-col relative text-center">
    <Hero />
    <Features />
    <section
      className="flex flex-col gap-5 px-5 py-20 bg-brand-dark boost-section xl:py-10"
    >
      <div className="relative z-10 flex flex-col gap-5 xl:gap-7">
        <h2 className="font-bold text-white text-[1.7rem] xl:text-4xl">
          Boost your links today
        </h2>
        <Button text="Get Started" className="px-8 xl:text-2xl" />
      </div>
    </section>
  </main>;
};

export default Main;
