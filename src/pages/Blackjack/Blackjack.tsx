import { useState } from "react";
import "./Blackjack.css";

export const Blackjack = () => {
  const [deck, setDeck] = useState<{ suit: string; value: string }[]>([]);
  const [playerHand, setPlayerHand] = useState<{ suit: string; value: string }[]>([]);
  const [dealerHand, setDealerHand] = useState<{ suit: string; value: string }[]>([]);
  const [message, setMessage] = useState<string>("");

  const initializeDeck = () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const newDeck = suits.flatMap((suit) =>
      values.map((value) => ({ suit, value }))
    );
    setDeck(shuffleDeck(newDeck));
  };

  const shuffleDeck = (deck: { suit: string; value: string }[]) => {
    return deck.sort(() => Math.random() - 0.5);
  };

  const dealCards = () => {
    if (deck.length < 4) {
      initializeDeck();
    }
    const newPlayerHand = [deck[0], deck[1]];
    const newDealerHand = [deck[2], deck[3]];

    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);

    setDeck(deck.slice(4));
  };

  const takeOneCard = () => {
    const newPlayerHand = [...playerHand, deck[0]];
    setPlayerHand(newPlayerHand);
    setDeck(deck.slice(1));
  }

  const calculateHand = (hand: { suit: string; value: string }[]) => {
    return hand.reduce((sum, card) => {
      if (card.value === "J" || card.value === "Q" || card.value === "K") {
        return sum + 10;
      } else if (card.value === "A") {
        return sum + 11;
      } else {
        return sum + parseInt(card.value);
      }
    }, 0);
  }

  const calculateScore = () => {
    const playerHandScore = calculateHand(playerHand);
    const dealerHandScore = calculateHand(dealerHand);

    if (playerHandScore > 21) {
      setMessage("You lose");
    } else if (dealerHandScore > 21) {
      setMessage("Dealer lose");
    } else if (playerHandScore > dealerHandScore) {
      setMessage("You win");
    } else if (playerHandScore < dealerHandScore) {
      setMessage("Dealer win");
    } else {  
      setMessage("Draw");
    }
  }

  const playerCheck = () => {
    dealerCheck();
  }

  const dealerCheck = () => {
    const dealerHandScore = calculateHand(dealerHand);
    if (dealerHandScore < 17) {
      const newDealerHand = [...dealerHand, deck[0]];
      setDealerHand(newDealerHand);
      setDeck(deck.slice(1));
    } else {
      calculateScore();
    }
  }

  console.log(playerHand.length);

  return (
    <div className="blackjack-page">
      <div className="blackjack-page-title">Blackjack</div>
      <div className="blackjack-page-message">{message}</div>
      
      <div className="blackjack-page-rules">
        <div>your bet is 10$</div>
      </div>
      <div className="blackjack-gamefield">
        <div className="gamefield">
          <div className="dealerCards">
            <h3>Dealer Cards</h3>
            {dealerHand.map((card, index) => index === 0 ? (
              <div key={index} className="card-back" />
            ) : (
              <div key={index} className="card">
                {card.value} {card.suit}
              </div>
            ))}
          </div>
          <div className="playerCards">
            <h3>Player Cards</h3>
            {playerHand.map((card, index) => (
              <div key={index} className="card">
                {card.value} {card.suit}
              </div>
            ))}
          </div>
        </div>
        <div className="gamefield-actionbar">
          {deck.length === 0 ? (
            <button onClick={initializeDeck}>Shuffle</button>
          ) : playerHand.length > 1 ? (
            <>
              <button onClick={takeOneCard}>Take</button>
              <button onClick={playerCheck}>Check</button>
            </>
          ) : (
            <button onClick={dealCards}>Deal</button>
          )}
        </div>
      </div>
    </div>
  );
};
