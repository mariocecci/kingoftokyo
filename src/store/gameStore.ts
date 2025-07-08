import { create } from "zustand";

type Player = {
  id: number;
  name: string;
  isAlive: boolean;
  stars: number;
  energy: number;
  life: number;
  inTokyo: boolean;
};

type GameState = {
  players: Player[];
  currentPlayerIndex: number;
  nextTurn: () => void;
  enterTokyo: (playerId: number) => void;
  exitTokyo: (playerId: number) => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  players: [
    { id: 1, name: "Mario", isAlive: true, stars: 0, energy: 0, life: 10, inTokyo: false },
    { id: 2, name: "Jogador 2", isAlive: true, stars: 0, energy: 0, life: 10, inTokyo: false },
  ],
  currentPlayerIndex: 0,

  nextTurn: () => {
    const nextIndex = (get().currentPlayerIndex + 1) % get().players.length;
    set({ currentPlayerIndex: nextIndex });
  },

  enterTokyo: (playerId) => {
    set((state) => ({
      players: state.players.map((p) =>
        p.id === playerId ? { ...p, inTokyo: true } : { ...p, inTokyo: false }
      ),
    }));
  },

  exitTokyo: (playerId) => {
    set((state) => ({
      players: state.players.map((p) =>
        p.id === playerId ? { ...p, inTokyo: false } : p
      ),
    }));
  },
}));
