// src/components/DicePanel.tsx
"use client";

import React, { useState } from "react";

const faces = ["1", "2", "3", "💥", "❤️", "⚡"];

export default function DicePanel() {
  const [dice, setDice] = useState<string[]>(Array(6).fill("1"));

  function rollDice() {
    const rolled = dice.map(() => faces[Math.floor(Math.random() * faces.length)]);
    setDice(rolled);
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <h2 className="text-white text-2xl font-bold">🎲 Dados</h2>

      {/* Dados */}
      <div className="flex flex-wrap justify-center gap-4">
        {dice.map((face, i) => (
          <div
            key={i}
            className="w-16 h-16 bg-gray-800 text-white text-3xl flex items-center justify-center rounded-xl border-2 border-green-400 shadow-lg"
          >
            {face}
          </div>
        ))}
      </div>

      {/* Botão de rolar */}
      <button
        onClick={rollDice}
        className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition"
      >
        Rolar Dados
      </button>
    </div>
  );
}
