import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, setModalImage }) => {
  if (images.length === 0) return null;

  return (
    <div className={s.gallery}>
      <ul className={s.list}>
        {images.map((image) => (
          <li className={s.listItem} key={image.id}>
            <ImageCard image={image} setModalImage={setModalImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
