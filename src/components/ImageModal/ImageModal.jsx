import React from "react";
import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, setModalImage }) => {
  if (!image) return null;

  return (
    <ReactModal
      className={s.modalContent}
      isOpen={true}
      onRequestClose={() => setModalImage(null)}
    >
      <div>
        <button className={s.closeBtn} onClick={() => setModalImage(null)}>
          Close
        </button>
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <h3 className={s.author}>{image.user.name}</h3>
        <p className={s.descr}>
          {image.description || "No description available."}
        </p>
        <p className={s.likes}>{image.likes} Likes</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
