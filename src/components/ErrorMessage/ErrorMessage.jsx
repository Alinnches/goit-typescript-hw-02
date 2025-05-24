import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={s.errorMsg}>{message}</div>;
};

export default ErrorMessage;
