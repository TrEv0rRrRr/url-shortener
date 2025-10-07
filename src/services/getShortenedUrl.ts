/**
 * Sends a POST request to the CleanURI API to shorten a given URL.
 *
 * @param url - The original URL to be shortened.
 * @returns A promise that resolves to the shortened URL as a string.
 *
 * @throws Will throw an error if the network request fails or the response is invalid.
 */
export default async function getShortenedUrl(url: string): Promise<string> {
  try {
    const response = await fetch("/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(url)}`,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to shorten URL");
    }

    return data.result_url;
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message);
    return "An error occurred while shortening your URL.";
  }
}
