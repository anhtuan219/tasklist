import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="spinner" style={{ margin: "auto" }}></div>
      <h2 style={{ textAlign: "center" }}>Loading tasks...</h2>
    </div>
  );
};

export default LoadingSpinner;
