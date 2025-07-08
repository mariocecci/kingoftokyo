"use client";

import { useGameStore } from "@/store/gameStore";

export default function PlayerPanel() {
  const players = useGameStore((state) => state.players);
  const currentPlayerIndex = useGameStore((state) => state.currentPlayerIndex);

  const currentPlayer = players[currentPlayerIndex];

  return (
    <div className="mt-10 w-full max-w-md bg-[#222] rounded-xl p-6 shadow-lg border border-neutral-700 text-white flex flex-col gap-4">
      <h3 className="text-xl font-semibold">🎮 {currentPlayer.name} (Turno Atual)</h3>

      <div className="flex justify-between items-center">
        <span>❤️ Vida:</span>
        <span className="text-lg font-bold">{currentPlayer.life}</span>
      </div>

      <div className="flex justify-between items-center">
        <span>⚡ Energia:</span>
        <span className="text-lg font-bold">{currentPlayer.energy}</span>
      </div>

      <div className="flex justify-between items-center">
        <span>🌟 Estrelas:</span>
        <span className="text-lg font-bold">{currentPlayer.stars}</span>
      </div>

      <div className="flex justify-between items-center">
        <span>🗼 Está em Tóquio?</span>
        <span className="text-lg font-bold">{currentPlayer.inTokyo ? "Sim" : "Não"}</span>
      </div>
    </div>
  );
}
