import { create } from "zustand";

export const useListofPlayers = create((set, get) => ({
  players: ["Jhon", "Jane", "Doe", "Smith"],
//   addPlayer: (player) => set((state) => ({ players: [...state.players, player] })),
//   removePlayer: (playerId) => set((state) => ({ players: state.players.filter(p => p.id !== playerId) })),
//   updatePlayer: (player) => set((state) => ({ players: state.players.map(p => p.id === player.id ? player : p) })),
  getPlayers: () => get().players,
}));