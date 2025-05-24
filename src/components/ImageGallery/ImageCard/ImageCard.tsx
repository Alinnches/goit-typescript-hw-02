import React from "react";
import s from "./ImageCard.module.css";
import { UnsplashImage } from "../../../types";

interface Props {
  image: UnsplashImage;
  setModalImage: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<Props> = ({ image, setModalImage }) => {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => setModalImage(image)}
      />
    </div>
  );
};

export default ImageCard;
