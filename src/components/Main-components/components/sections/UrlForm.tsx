import useUrlShortener from "../../../../hooks/useUrlShortener";
import type { OnUrlCountChange } from "../../../../types/url";
import Button from "../ui/Button";
import UrlCard from "../ui/UrlCard";

type Props = {
  onUrlCountChange: OnUrlCountChange;
}

const UrlForm = ({ onUrlCountChange }: Props) => {
  const {
    handleChange,
    handleSubmit, inputErrorStyle,
    error, originalUrl, shortenedUrls
  } = useUrlShortener(onUrlCountChange);

  return (
    <article className="flex flex-col items-center justify-center z-10 gap-5">
      <form action="" onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 p-5 rounded-md bg-brand-dark">
        <div className="flex flex-col items-start gap-1">
          <input
            className={`bg-white px-3 py-2.5 rounded-md max-w-5xl ${error && inputErrorStyle}`}
            type="text"
            placeholder="Shorten a link here..."
            value={originalUrl}
            onChange={handleChange}
          />
          {error && <span className="text-error italic text-[.9rem]">{error}</span>}
        </div>
        <Button text="Shorten It!" variant="secondary" />
      </form>
      <div className="flex flex-col items-center justify-center max-w-5xl gap-5">
        {
          shortenedUrls.map((shortenedLinks, index) =>
            <UrlCard originalUrl={shortenedLinks.originalUrl} shortenedUrl={shortenedLinks.shortenedUrl} key={index} />
          )
        }
      </div>
    </article>
  )
}

export default UrlForm