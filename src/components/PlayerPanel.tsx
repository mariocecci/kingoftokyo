"use client";

import React, { useState } from "react";

export default function PlayerPanel() {
  const [life, setLife] = useState(10);
  const [energy, setEnergy] = useState(0);
  const [stars, setStars] = useState(0);

  return (
    <div className="mt-10 w-full max-w-md bg-[#222] rounded-xl p-6 shadow-lg border border-neutral-700 text-white flex flex-col gap-4">
      <h3 className="text-xl font-semibold">👾 Jogador 1</h3>

      <div className="flex justify-between items-center">
        <span>❤️ Vida:</span>
        <div className="flex gap-2 items-center">
          <button onClick={() => setLife((v) => Math.max(0, v - 1))}>➖</button>
          <span className="text-lg font-bold">{life}</span>
          <button onClick={() => setLife((v) => Math.min(10, v + 1))}>➕</button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span>⚡ Energia:</span>
        <div className="flex gap-2 items-center">
          <button onClick={() => setEnergy((v) => Math.max(0, v - 1))}>➖</button>
          <span className="text-lg font-bold">{energy}</span>
          <button onClick={() => setEnergy((v) => v + 1)}>➕</button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span>🌟 Estrelas:</span>
        <div className="flex gap-2 items-center">
          <button onClick={() => setStars((v) => Math.max(0, v - 1))}>➖</button>
          <span className="text-lg font-bold">{stars}</span>
          <button onClick={() => setStars((v) => v + 1)}>➕</button>
        </div>
      </div>
    </div>
  );
}
