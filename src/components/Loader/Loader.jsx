import React from "react";
import { RingLoader } from "react-spinners";

const override = {
  display: "blok",
  margin: "0, auto",
  borderColor: "blue",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%",
};

const Loader = ({ loading }) => {
  return (
    <RingLoader
      color="#00BFFF"
      loading={loading}
      cssOverride={override}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
