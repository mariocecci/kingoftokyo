"use client";

import { useGameStore } from "@/store/gameStore";

export default function ActionButtons() {
  const nextTurn = useGameStore((state) => state.nextTurn);
  const enterTokyo = useGameStore((state) => state.enterTokyo);
  const exitTokyo = useGameStore((state) => state.exitTokyo);
  const currentPlayer = useGameStore(
    (state) => state.players[state.currentPlayerIndex]
  );

  return (
    <div className="mt-10 flex flex-wrap gap-4 justify-center">
      <button
        onClick={() => enterTokyo(currentPlayer.id)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Entrar em Tóquio
      </button>

      <button
        onClick={() => exitTokyo(currentPlayer.id)}
        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition"
      >
        Sair de Tóquio
      </button>

      <button
        onClick={nextTurn}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
      >
        Finalizar Turno
      </button>
    </div>
  );
}
