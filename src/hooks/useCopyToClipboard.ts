import { useState } from "react";

/**
 * Custom React hook to copy a given URL to the clipboard and manage copy state.
 *
 * This hook provides a function to copy the provided `shortenedUrl` to the clipboard,
 * sets a flag indicating whether the copy was successful, and resets the flag after
 * a specified timeout. It uses the Clipboard API and falls back to a legacy method if needed.
 *
 * @param resetTimeMs - The time in milliseconds after which the `isCopied` state resets to `false`.
 * @param shortenedUrl - The URL string to be copied to the clipboard.
 * @returns An object containing:
 *   - `isCopied`: A boolean indicating if the URL was successfully copied.
 *   - `handleCopy`: A function to trigger the copy operation for the provided URL.
 */
export const useCopyToClipboard = (
  resetTimeMs: number,
  shortenedUrl: string
) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, resetTimeMs);

      return true;
    } catch (error) {
      console.error("Failed to copy using Clipboard API:", error);

      // Fallback method
      return fallbackCopyTextToClipboard(text, resetTimeMs, setIsCopied);
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(shortenedUrl);
    if (success) console.log("URL copied successfully!");
    else console.log("Failed to copy URL");
  };

  return { isCopied, handleCopy };
};

const fallbackCopyTextToClipboard = (
  text: string,
  resetTimeMs: number,
  setIsCopied: (value: boolean) => void
): boolean => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, resetTimeMs);
    }
    return successful;
  } catch (err) {
    console.error("Fallback: Unable to copy", err);
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
};
