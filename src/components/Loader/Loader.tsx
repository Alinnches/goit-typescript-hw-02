import React from "react";
import { RingLoader } from "react-spinners";
import { CSSProperties } from "react";

interface Props {
  loading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Loader: React.FC<Props> = ({ loading }) => {
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
