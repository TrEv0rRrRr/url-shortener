import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import isValidUrl from "../helpers/isValidUrl";
import getShortenedUrl from "../services/getShortenedUrl";
import type { OnUrlCountChange, ShortenedUrls } from "../types/url";

export default function useUrlShortener(onUrlCountChange: OnUrlCountChange) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [error, setError] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrls>([]);

  const inputErrorStyle = "placeholder:text-error outline-2 outline-error";

  useEffect(() => {
    onUrlCountChange(shortenedUrls.length);
  }, [shortenedUrls.length, onUrlCountChange]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!originalUrl) {
      setError("Please enter a URL");
      return;
    }

    if (!isValidUrl(originalUrl)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    try {
      const result = await getShortenedUrl(originalUrl);

      if (result.includes("error occurred")) {
        setError("Failed to shorten URL. Please try again.");
      } else {
        setError("");

        setShortenedUrls((prevShortenedUrls) => {
          const newUrlEntry = { originalUrl, shortenedUrl: result };
          const updatedUrls = [...prevShortenedUrls, newUrlEntry];

          return updatedUrls.length > 3 ? updatedUrls.slice(1) : updatedUrls;
        });

        setOriginalUrl("");
      }
    } catch {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setOriginalUrl(url);

    if (error) setError("");
  };

  return {
    inputErrorStyle,
    handleSubmit,
    handleChange,
    originalUrl,
    error,
    shortenedUrls,
  };
}
