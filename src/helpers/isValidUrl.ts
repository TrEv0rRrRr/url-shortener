/**
 * Checks if a given string is a valid HTTP or HTTPS URL.
 *
 * Attempts to construct a `URL` object from the input string.
 * Returns `true` if the string is a valid URL and starts with "http://" or "https://",
 * otherwise returns `false`.
 *
 * @param url - The string to validate as a URL.
 * @returns `true` if the string is a valid HTTP or HTTPS URL, otherwise `false`.
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return url.startsWith("http://") || url.startsWith("https://");
  } catch {
    return false;
  }
};

export default isValidUrl;
