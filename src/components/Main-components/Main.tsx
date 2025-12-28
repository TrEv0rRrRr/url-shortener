import { useState } from "react";
import getAfterHeight from "../../helpers/getAfterHeight";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import UrlForm from "./components/sections/UrlForm.tsx";
import Button from './components/ui/Button';

const Main = () => {
  const [urlCount, setUrlCount] = useState(0);

  return <main className="flex flex-col relative text-center">
    <Hero />
    <section className={`relative after:absolute after:content-[''] after:w-full after:bg-text-muted/20 after:bottom-0 after:z-0 ${getAfterHeight(urlCount)}`}>
      <div className="relative z-10">
        <UrlForm onUrlCountChange={setUrlCount} />
      </div>
    </section>
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
