import { useState } from "react";
import { GameField } from "../../componets/GameField/GameField";

import "./Slots.css";

export const Slots = () => {
  return (
    <div className="slots-page">
      <div className="slots-page-title">Slots</div>
      <GameField />
    </div>
  );
};
