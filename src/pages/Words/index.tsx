import React, { useRef, useState } from "react";

import "./Words.css";

export const Words = () => {
  const wordsHistoryDefaultLength = 7;

  const [word] = useState<string>("hello");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [guessWord, setGuessWord] = useState<string[]>([]);

  const [wordsHistory, setWordsHistory] = useState<string[]>([]);
  const inputsRefs = useRef<HTMLInputElement[]>([]);

  const autoFocusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newGuessWord = [...guessWord];
    newGuessWord[index] = e.target.value;
    setGuessWord(newGuessWord);

    if (e.target.value && index < word.length - 1) {
      inputsRefs.current[index + 1]?.focus();
    }
  };

  const toGuessWord = () => {
    const newWord = guessWord.join("");
    if (word === "") {
      setErrorMessage("Please enter a word");
      return;
    } else if (newWord.length !== word.length) {
      setErrorMessage("Please enter a word with the same length");
      return;
    } else if (newWord.toLowerCase() === word.toLowerCase()) {
      setGuessWord([]);
      setErrorMessage("You guessed the word!");
      return;
    } else {
      setWordsHistory([...wordsHistory, newWord]);
      setGuessWord([]);
      clearInputs();
      setErrorMessage("Try again");
    }
  };

  const clearInputs = () => {
    inputsRefs.current.forEach((input) => {
      input.value = "";
      input.blur();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toGuessWord();
    }
  });

  console.log(guessWord.length);

  return (
    <div className="words-game">
      <div className="words-game__container">
        <div className="message">{errorMessage}</div>
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
              ref={(el) => (inputsRefs.current[index] = el as HTMLInputElement)}
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
          {Array.from({ length: 5 - wordsHistory.length }).map((_, index) => (
            <div key={index} className="words-history__empty-words">
              {Array.from({ length: word.length }).map((_, index) => (
                <div key={index} className="word-history-letter"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
