import { FEATURES } from '../../../../consts/features'
import FeatureCard from '../ui/FeatureCard'

const Features = () => {
  return (
    <section className="flex flex-col items-center 
    justify-center gap-22 bg-text-muted/20 pt-12 py-18">
      <div className="flex flex-col items-center 
    justify-center gap-5">
        <h2 className="font-bold text-3xl">Advanced Statistics</h2>
        <p className="text-text-secondary px-5">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div className="flex flex-col items-center 
    justify-center gap-25">
        {
          FEATURES.map(({ content, imgSrc, title }, index) => {
            return <FeatureCard content={content} imgSrc={imgSrc} title={title} id={index} />
          })
        }
      </div>

    </section>
  )
}

export default Features