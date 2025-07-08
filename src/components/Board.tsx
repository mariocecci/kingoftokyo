// src/components/Board.tsx

import React from "react";

export default function Board() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-4 bg-[#1b1b1b] rounded-xl shadow-lg">
      {/* Título do Tabuleiro */}
      <h2 className="text-2xl font-bold text-white">🗼 Tóquio</h2>

      {/* Área de Tóquio */}
      <div className="w-[300px] h-[200px] bg-[#444] border-4 border-yellow-500 rounded-lg flex items-center justify-center text-white text-xl font-semibold shadow-inner">
        <span>Área de Tóquio</span>
      </div>

      {/* Área Fora de Tóquio */}
      <div className="w-full flex flex-wrap justify-center gap-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="w-[120px] h-[150px] bg-[#333] rounded-lg text-white flex items-center justify-center border border-neutral-600"
          >
            Jogador {n}
          </div>
        ))}
      </div>
    </div>
  );
}
