import React, { useState, useEffect } from "react";

import { Slot } from "../Slot/Slot";
import { StartBtn } from "../StartBtn/StartBtn";

import "./GameField.css";

const elements = ["🍒", "🍊", "🍐", "🍋", "🍉", "🍇"];

export const GameField = () => {
  const [slotA, setSlotA] = useState("🍒");
  const [slotB, setSlotB] = useState("🍒");
  const [slotC, setSlotC] = useState("🍒");
  const [isRunning, setIsRunning] = useState(false);

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
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 2000); // Duration of the animation
  };

  return (
    <div className="game-field">
      <div className={`game-field-slots ${isRunning ? "running" : ""}`}>
        <div>
          <Slot slotValue={slotA} setSlotValue={setSlotA} />
        </div>
        <div>
          <Slot slotValue={slotB} setSlotValue={setSlotB} />
        </div>
        <div>
          <Slot slotValue={slotC} setSlotValue={setSlotC} />
        </div>
      </div>
      <div className="game-field-arm">
        <StartBtn onClick={runSlots} />
      </div>
    </div>
  );
};
