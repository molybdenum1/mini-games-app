import React from "react";

import "./Slot.css";

interface ISlotProps {
  slotValue: string;
  setSlotValue?: (value: string) => void;
}

export const Slot = ({ slotValue }: ISlotProps) => {
  return (
    <div className={`slot`}>
      <div className="slot-value">{slotValue}</div>
    </div>
  );
};
