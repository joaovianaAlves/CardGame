import { useState } from "react";
import { cards } from "../libs/utils";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function Game() {
  const [shuffledCard, setShuffledCard] = useState(shuffle(cards));
  const [playerHand, setPlayerHand] = useState([]);

  const addCard = () => {
    if (shuffledCard.length > 0) {
      const updatedDeck = [...shuffledCard];
      const cardDealt = updatedDeck.shift(); // Remove the first card from the deck
      const updatedPlayerHand = [...playerHand, cardDealt]; // Add the dealt card to the player's hand
      setShuffledCard(updatedDeck);
      setPlayerHand(updatedPlayerHand);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Your Hand</h2>
          <div className="grid grid-cols-2 gap-2">
            {playerHand.map((card, index) => (
              <div
                className="p-2 bg-white border border-gray-300 rounded"
                key={index}
              >
                {card.name} de {card.type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Remaining Deck</h2>
          <div className="grid grid-cols-4 gap-2">
            {shuffledCard.map((card, index) => (
              <div
                className="p-2 bg-white border border-gray-300 rounded"
                key={index}
              >
                {card.name} de {card.type}
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={addCard}
          >
            Add Card to Hand
          </button>
        </div>
      </div>
    </div>
  );
}
