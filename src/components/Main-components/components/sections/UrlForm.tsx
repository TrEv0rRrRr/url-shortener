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
    <article className="flex flex-col items-center justify-center gap-5">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 rounded-xl bg-brand-dark xl:w-200 xl:flex-row xl:p-10">
        <div className="flex flex-col gap-1 w-full">
          <input
            className={`bg-white px-3 py-2.5 xl:w-full ${error && inputErrorStyle}`}
            type="text"
            placeholder="Shorten a link here..."
            value={originalUrl}
            onChange={handleChange}
          />
          {error && <span className="text-error italic text-[.9rem]">{error}</span>}
        </div>
        <Button text="Shorten It!" variant="secondary" className="xl:w-35" />
      </form>
      <div className="flex flex-col items-center justify-center w-full gap-5 xl:w-150">
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