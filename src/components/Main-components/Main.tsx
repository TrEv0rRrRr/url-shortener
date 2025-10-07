import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Button from './components/ui/Button';

const Main = () => {
  return <main className="flex flex-col relative text-center">
    <Hero />
    <Features />
    <section
      className="flex flex-col gap-5 px-5 py-20 bg-brand-dark boost-section"
    >
      <div className="relative z-10 flex flex-col gap-5">
        <h2 className="font-bold text-white text-[1.7rem]">
          Boost your links today
        </h2>
        <Button text="Get Started" className="px-8" />
      </div>
    </section>
  </main>;
};

export default Main;
