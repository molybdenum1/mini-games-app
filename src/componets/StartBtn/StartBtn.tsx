import React from "react";

import "./StartBtn.css";

interface IStartBtnProps {
  onClick: () => void;
}

export const StartBtn = ({ onClick }: IStartBtnProps) => {
  return (
    <button type="button" className="start-btn" onClick={onClick}>
      RUN
    </button>
  );
};
