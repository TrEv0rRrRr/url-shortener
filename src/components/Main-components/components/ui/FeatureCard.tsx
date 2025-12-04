import { getMarginMeasure } from "../../../../helpers/getMarginMeasure.ts";

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  content: string;
}

const FeatureCard = ({ content, imgSrc, title, id }: Props) => {
  const afterStyle = "after:content-[''] after:absolute after:bg-brand-cyan after:w-2 after:h-110 after:-bottom-110 xl:after:h-2 xl:after:w-100 xl:after:bottom-0 xl:after:top-38 xl:after:-right-100"
  const firstCard = 0

  return (
    <div className={`bg-white flex flex-col items-center justify-center 
    text-center gap-5 max-w-80 h-max px-6 pt-20 pb-8 relative rounded-md
    ${id === firstCard ? afterStyle : ""} xl:text-start ${getMarginMeasure(id)}`}>
      <div className="bg-brand-dark rounded-[50%] absolute -top-10 xl:left-9">
        <img className="p-6 object-contain w-22" src={imgSrc} alt="" aria-hidden />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-text-secondary text-[1rem] leading-7">{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard