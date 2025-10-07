export type ShortenedUrl = {
  originalUrl: string;
  shortenedUrl: string;
};

export type ShortenedUrls = ShortenedUrl[];

export type OnUrlCountChange = (count: number) => void;
