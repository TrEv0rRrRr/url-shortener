import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import isValidUrl from "../helpers/isValidUrl";
import getShortenedUrl from "../services/getShortenedUrl";
import type { OnUrlCountChange, ShortenedUrls } from "../types/url";

/**
 * Custom React hook for managing URL shortening functionality.
 *
 * This hook provides state and handlers for a URL shortener form, including:
 * - Managing the original URL input and its validation.
 * - Handling errors related to input and API requests.
 * - Storing up to the last three shortened URLs.
 * - Notifying a parent component of the current count of shortened URLs.
 *
 * @param onUrlCountChange - Callback invoked whenever the number of shortened URLs changes.
 * @returns An object containing:
 * - `inputErrorStyle`: CSS class string for styling input errors.
 * - `handleSubmit`: Form submit handler for shortening URLs.
 * - `handleChange`: Input change handler for updating the original URL.
 * - `originalUrl`: Current value of the URL input field.
 * - `error`: Current error message, if any.
 * - `shortenedUrls`: Array of the most recent shortened URLs.
 */
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
