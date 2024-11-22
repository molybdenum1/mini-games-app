import { useState } from "react";
import { GameField } from "../../componets/GameField/GameField";

import "./Slots.css";
import { useAppSelector } from "../../store/hooks";
import { AddPlayground } from "../../componets/AddPlayground/AddPlayground";

export const Slots = () => {
  const balance = useAppSelector((state) => state.user.balance);

  const [playground, setPlayground] = useState([
    { id: 1, isShown: false },
    { id: 2, isShown: false },
    { id: 3, isShown: false },
    { id: 4, isShown: false },
    { id: 5, isShown: true },
    { id: 6, isShown: false },
    { id: 7, isShown: false },
    { id: 8, isShown: false },
    { id: 9, isShown: false },
  ]);

  const showSlots = (id: number) => {
    setPlayground(
      playground.map((playgroundItem) => {
        if (playgroundItem.id === id) {
          return { ...playgroundItem, isShown: true };
        }
        return playgroundItem;
      })
    );
  };

  return (
    <div className="slots-page">
      <div className="slots-page-user_balance">
        <div className="slots-page-user_balance-title">Balance</div>
        <div className="slots-page-user_balance-value">{balance}$</div>
      </div>
      <div className="slots-page-title">Slots</div>
      <div className="slots-page-playground">
        {playground.map((playgroundItem) =>
          playgroundItem.isShown ? (
            <GameField />
          ) : (
            <AddPlayground id={playgroundItem.id} showSlots={showSlots} />
          )
        )}
      </div>
      <div className="slots-page-rules">
        <div>your bet is 10$</div>
      </div>
    </div>
  );
};
