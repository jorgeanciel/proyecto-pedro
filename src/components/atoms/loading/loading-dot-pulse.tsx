import React from "react";

type LoadingDotPulseProps = {
  theme?: "primary" | "secondary" | "";
};
const LoadingDotPulse: React.FC<LoadingDotPulseProps> = ({ theme = "" }) => {
  return <div className={`dot-pulse m-auto ${theme}`} />;
};

export default LoadingDotPulse;
