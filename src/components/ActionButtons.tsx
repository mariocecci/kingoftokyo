"use client";

import React from "react";

export default function ActionButtons() {
  function handleEndTurn() {
    alert("🔁 Turno finalizado!");
    // Em breve: lógica real de turnos
  }

  function handleEnterTokyo() {
    alert("🗼 Você entrou em Tóquio!");
    // Em breve: alternar jogador dentro/fora de Tóquio
  }

  function handleExitTokyo() {
    alert("🏃 Você saiu de Tóquio!");
    // Em breve: alternar jogador dentro/fora
  }

  return (
    <div className="mt-10 flex flex-wrap gap-4 justify-center">
      <button
        onClick={handleEnterTokyo}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Entrar em Tóquio
      </button>

      <button
        onClick={handleExitTokyo}
        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition"
      >
        Sair de Tóquio
      </button>

      <button
        onClick={handleEndTurn}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
      >
        Finalizar Turno
      </button>
    </div>
  );
}
