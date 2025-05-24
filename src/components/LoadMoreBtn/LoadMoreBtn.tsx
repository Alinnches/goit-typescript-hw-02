import React from "react";
import s from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={s.loadBtn} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
