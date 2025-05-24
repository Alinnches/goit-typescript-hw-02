export interface UnsplashImage {
  id: string;
  alt_description: string;
  description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

export interface UnsplashApiResponse {
  results: UnsplashImage[];
}
