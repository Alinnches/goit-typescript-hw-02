import React from "react";
import s from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <div className={s.errorMsg}>{message}</div>;
};

export default ErrorMessage;
