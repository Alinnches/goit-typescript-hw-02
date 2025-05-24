import React, { useState, useEffect, FormEvent } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { UnsplashImage, UnsplashApiResponse } from "./types";

const App: React.FC = () => {
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const ACCESS_KEY = "W_dkFwv4jHPTKvmZWYPWJAHXXRNJWcY76-GHWlZ4qzs";

  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<UnsplashImage | null>(null);

  const fetchImages = async (
    query: string,
    page: number = 1
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<UnsplashApiResponse>(`${BASE_URL}`, {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });

      const data = response.data;
      if (page === 1) {
        setImages(data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please, enter the text!");
      return;
    }
    setPage(1);
    fetchImages(query);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      fetchImages(query, page);
    }
  }, [page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} setQuery={setQuery} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader loading={loading} />}
      <ImageGallery images={images} setModalImage={setModalImage} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal image={modalImage} setModalImage={setModalImage} />
    </div>
  );
};

export default App;
