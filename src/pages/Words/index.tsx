import React, { useState } from "react";

import "./Words.css";

export const Words = () => {
  const [word] = useState<string>("hello");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [guessWord, setGuessWord] = useState<string[]>([]);

  const [wordsHistory] = useState<string[]>([
    "hello",
    "world",
    "",
    "",
    "",
    "",
    "",
  ]);

  const autoFocusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.value.length === 1 && index !== word.length - 1) {
      const nextInput = document.querySelectorAll("input")[
        index + 1
      ] as HTMLInputElement;
      nextInput.focus();
    }
    guessWord[index] = e.target.value;
    setGuessWord([...guessWord]);
  };

  const toGuessWord = () => {
    const newWord = guessWord.join("");
    if(word === "") {
      setErrorMessage("Please enter a word");
      return;
    } else if(newWord.length !== word.length) {
      setErrorMessage("Please enter a word with the same length");
      return;
    } else if(newWord.toLowerCase() === word.toLowerCase()) {
      setGuessWord([]);
      setErrorMessage("You guessed the word!");
      return;
    } else {
      setGuessWord([]);
      setErrorMessage("Try again");
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toGuessWord();
    }
  })

  console.log(guessWord.length);

  return (
    <div className="words-game">
      <div className="words-game__container">
        <div className="message">
            {errorMessage}
        </div>
        <div className="word">
          {word.split("").map((letter, index) => (
            <div key={index} className="word-letter">
              {letter}
            </div>
          ))}
        </div>
        <div className="word-input">
          {Array.from({ length: word.length }).map((_, index) => (
            <input
              onChange={(e) => autoFocusChange(e, index)}
              key={index}
              className="word-input-letter"
              type="text"
              maxLength={1}
            />
          ))}
        </div>
        <div className="words-history">
          {wordsHistory.map((wordHistory, index) => (
            <div key={index} className="words-history__word">
              {wordHistory.length !== 0 ? (
                wordHistory.split("").map((letter, index) => (
                  <div key={index} className="word-history-letter">
                    {letter}
                  </div>
                ))
              ) : (
                <div className="words-history__empty-words">
                  {Array.from({ length: word.length }).map((_, index) => (
                    <div key={index} className="word-history-letter"></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
