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
      const cardDealt = updatedDeck.shift();
      const updatedPlayerHand = [...playerHand, cardDealt];
      setShuffledCard(updatedDeck);
      setPlayerHand(updatedPlayerHand);
      calculateCards(updatedPlayerHand);
    }
  };

  function calculateCards(hand) {
    if (hand.length > 0) {
      const value = hand.reduce((sum, card) => sum + card.value, 0);
      const values = hand.map((card) => card.value);
      console.log(value);
      console.log(values);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="flex mt-4">
          {shuffledCard.map((card, index) => (
            <div key={index} className="mr-2">
              <div className="p-2 border border-gray-600 rounded-md w-20 h-32 flex justify-center items-center relative">
                <div className="w-4 h-4 bg-white absolute rounded-full top-2 left-2">
                  {card.type}
                </div>
                {card.value}
                <div className="w-4 h-4 bg-white absolute rounded-full bottom-2 right-2 transform rotate-180">
                  {card.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          {playerHand.map((card, index) => (
            <div className="p-2 bg-white border-gray-300 rounded" key={index}>
              <div className="p-2 border border-gray-600 rounded-md w-20 h-32 flex justify-center items-center relative">
                <div className="w-4 h-4 bg-white absolute rounded-full top-2 left-2">
                  {card.type}
                </div>
                {card.value}
                <div className="w-4 h-4 bg-white absolute rounded-full bottom-2 right-2 transform rotate-180">
                  {card.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={addCard}
          >
            Adicionar Carta à Mão
          </button>
        </div>
      </div>
    </div>
  );
}
