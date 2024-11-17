import { useState } from "react";
import { GameField } from "../../componets/GameField/GameField";

import "./Slots.css";
import { useAppSelector } from "../../store/hooks";

export const Slots = () => {
  const balance = useAppSelector((state) => state.user.balance);

  return (
    <div className="slots-page">
      <div className="slots-page-user_balance">
        <div className="slots-page-user_balance-title">Balance</div>
        <div className="slots-page-user_balance-value">{balance}$</div>
      </div>
      <div className="slots-page-playground">
        <div className="slots-page-title">Slots</div>
        <GameField />
      </div>
      <div className="slots-page-rules">
        <div>your bet is 10$</div>
      </div>
    </div>
  );
};
