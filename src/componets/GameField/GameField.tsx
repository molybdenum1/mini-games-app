import { useState, useEffect } from "react";

import { Slot } from "../Slot/Slot";
import { StartBtn } from "../StartBtn/StartBtn";

import "./GameField.css";
import { useDispatch } from "react-redux";
import { placeBet } from "../../store/features/userSlice";

const elements = ["🍒", "🍊", "🍐", "🍋", "🍉", "🍇"];

export const GameField = () => {
  const [slotA, setSlotA] = useState("🍒");
  const [slotB, setSlotB] = useState("🍒");
  const [slotC, setSlotC] = useState("🍒");
  const [isRunning, setIsRunning] = useState(false);
  const [bet] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setSlotA(elements[Math.floor(Math.random() * elements.length)]);
        setSlotB(elements[Math.floor(Math.random() * elements.length)]);
        setSlotC(elements[Math.floor(Math.random() * elements.length)]);
      }, 300); // Change elements every 100ms
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const runSlots = () => {
    dispatch(placeBet(bet));
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 2000); // Duration of the animation
  };

  return (
    <div className="game-field">
      <div className="game-field-slots">
        <Slot slotValue={slotA} isRunning={isRunning} />
        <Slot slotValue={slotB} isRunning={isRunning} />
        <Slot slotValue={slotC} isRunning={isRunning} />
      </div>
      <div className="game-field-arm">
        <StartBtn onClick={runSlots} />
      </div>
    </div>
  );
};
