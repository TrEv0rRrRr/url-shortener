import { useState } from "react";

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
