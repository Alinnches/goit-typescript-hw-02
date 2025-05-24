import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, setModalImage }) => {
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
