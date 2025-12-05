import { useCopyToClipboard } from '../../../../hooks/useCopyToClipboard';
import Button from './Button';

type Props = {
  originalUrl: string;
  shortenedUrl: string;
}

const UrlCard = ({ originalUrl, shortenedUrl }: Props) => {
  const { handleCopy, isCopied } = useCopyToClipboard(2000, shortenedUrl);
  const buttonText = isCopied ? "Copied!" : "Copy";
  const buttonCopiedStyle = isCopied ? "!bg-brand-dark hover:!bg-brand-dark/80" : "";

  return (
    <div className="flex flex-col gap-4 items-center justify-center text-start bg-white w-full rounded-md p-4">
      <div className="border border-l-0 border-r-0 border-t-0 border-b-text-muted w-full pb-2">
        <p className="truncate max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          {originalUrl}
        </p>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <p className='text-brand-cyan truncate max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>{shortenedUrl}</p>
        <Button
          onClick={handleCopy}
          text={buttonText}
          variant='secondary'
          type='button'
          className={buttonCopiedStyle}
        />
      </div>
    </div>
  )
}

export default UrlCard