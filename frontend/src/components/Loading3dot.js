import React from "react";
import ReactDOM from "react-dom";

const Loading3dot = () => {
  return ReactDOM.createPortal(
    <div className="loading-wrapper">
      <span className="loader__ball loader__ball--1"></span>
      <span className="loader__ball loader__ball--2"></span>
      <span className="loader__ball loader__ball--3"></span>
    </div>,
    document.body
  );
};

export default Loading3dot;
