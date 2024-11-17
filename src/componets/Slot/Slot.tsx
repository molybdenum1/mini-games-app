import React from "react";

import "./Slot.css";

interface ISlotProps {
  slotValue: string;
  setSlotValue?: (value: string) => void;
  isRunning?: boolean;
}

export const Slot = ({ slotValue, isRunning }: ISlotProps) => {
  return (
    <div className={`slot ${isRunning ? "running" : ""}`}>
      <div className="slot-value">{slotValue}</div>
    </div>
  );
};
