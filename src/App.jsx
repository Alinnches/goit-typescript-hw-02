import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const ACCESS_KEY = "W_dkFwv4jHPTKvmZWYPWJAHXXRNJWcY76-GHWlZ4qzs";

  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (query, page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL}?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (response.status !== 200) {
        throw new Error("Something is wrong!");
      }
      const data = response.data;

      if (page === 1) {
        setImages(data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please, enter the text!");
      return;
    }
    setPage(1);
    fetchImages(query);
  };

  const handleLoadMore = () => {
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
      {loading && <Loader />}
      <ImageGallery images={images} setModalImage={setModalImage} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal image={modalImage} setModalImage={setModalImage} />
    </div>
  );
};

export default App;
