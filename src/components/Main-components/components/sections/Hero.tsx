import Illustration from "../../../../assets/illustration-working.svg"
import Button from "../ui/Button"

const Hero = () => {
  return (
    <section className={`flex flex-col relative overflow-hidden xl:flex-row-reverse xl:gap-8 xl:items-center xl:pb-32 xl:pt-16 xl:px-20`}>

      <div className="relative w-full overflow-hidden xl:flex-1 xl:overflow-visible xl:max-w-[50%]">
        <img className="w-[130%] -ml-[15%] object-contain xl:w-[135%] xl:ml-0"
          src={Illustration} alt="" aria-hidden />
      </div>

      <div className="flex flex-col gap-8 px-6 pb-20 xl:flex-1 xl:gap-12 xl:max-w-[50%] xl:px-0 xl:pb-0">
        <article className="flex flex-col items-center justify-center text-center gap-4 xl:items-start xl:text-left xl:gap-6">
          <div className="flex flex-col items-center justify-center text-center gap-4 xl:text-start xl:items-start xl:gap-1">
            <h1 className="font-bold text-[2.65rem] text-brand-dark leading-[1.15] xl:text-[4.5rem] xl:leading-[1.15]">More than just shorter links</h1>
            <p className="text-text-secondary text-[1.05rem] leading-[1.7] xl:text-[1.375rem] xl:leading-[1.8] xl:mt-1">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
          </div>

          <Button text="Get Started" className="mt-2 xl:px-10 xl:py-3.5 xl:text-xl xl:rounded-full xl:self-start" />
        </article>
      </div>

    </section>
  )
}

export default Hero