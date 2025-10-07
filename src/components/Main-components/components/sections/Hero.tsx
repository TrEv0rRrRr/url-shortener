import { useState } from "react"
import Illustration from "../../../../assets/illustration-working.svg"
import getAfterHeight from "../../../../helpers/getAfterHeight"
import Button from "../ui/Button"
import UrlForm from "./UrlForm"

const Hero = () => {
  const [urlCount, setUrlCount] = useState(0);

  return (
    <section className={`flex flex-col gap-10 relative after:absolute after:content-[''] after:w-full after:bg-text-muted/20 after:bottom-0 after:z-0 ${getAfterHeight(urlCount)}`}>

      <img className="object-contain w-[120%] ml-[15%] scale-110"
        src={Illustration} alt="" aria-hidden />
      <div className="flex flex-col items-center gap-20">
        <article className="flex flex-col items-center justify-center text-center gap-7">
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <h1 className="font-bold text-4xl">More than just shorter links</h1>
            <p className="px-9 text-text-secondary">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
          </div>

          <Button text="Get Started" />
        </article>
        <UrlForm onUrlCountChange={setUrlCount} />
      </div>

    </section>
  )
}

export default Hero