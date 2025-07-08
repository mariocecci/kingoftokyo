"use client";

import React, { useState } from "react";

type Card = {
  id: number;
  name: string;
  cost: number;
  description: string;
};

const cardPool: Card[] = [
  {
    id: 1,
    name: "Spiked Tail",
    cost: 5,
    description: "Você causa +1 de dano ao atacar.",
  },
  {
    id: 2,
    name: "Regeneration",
    cost: 4,
    description: "Recupere 1 vida no início do seu turno.",
  },
  {
    id: 3,
    name: "Energy Hoarder",
    cost: 3,
    description: "Ganhe +1 energia extra sempre que rolar ⚡.",
  },
  {
    id: 4,
    name: "Wings",
    cost: 6,
    description: "Você pode evitar ataques recebidos uma vez por turno.",
  },
  {
    id: 5,
    name: "Extra Head",
    cost: 7,
    description: "Você rola +1 dado extra permanentemente.",
  },
];

export default function Shop() {
  const [cards, setCards] = useState<Card[]>(cardPool.slice(0, 3));

  function refreshShop() {
    // Simula 3 novas cartas aleatórias
    const shuffled = [...cardPool].sort(() => Math.random() - 0.5);
    setCards(shuffled.slice(0, 3));
  }

  return (
    <div className="mt-10 w-full max-w-4xl bg-[#1e1e1e] p-6 rounded-xl text-white shadow-xl border border-neutral-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">🃏 Loja de Cartas</h3>
        <button
          onClick={refreshShop}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition"
        >
          🔄 Atualizar cartas
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#2c2c2c] border border-yellow-600 rounded-lg p-4 flex flex-col gap-2"
          >
            <h4 className="text-lg font-semibold">{card.name}</h4>
            <span className="text-sm text-yellow-400">Custo: ⚡ {card.cost}</span>
            <p className="text-sm text-gray-300">{card.description}</p>
            <button className="mt-2 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
