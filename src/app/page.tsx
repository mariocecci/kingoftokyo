import Board from "@/components/Board";
import DicePanel from "@/components/DicePanel";
import PlayerPanel from "@/components/PlayerPanel";
import Shop from "@/components/Shop";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 p-8 flex flex-col items-center gap-12">
      <Board />
      <DicePanel />
      <PlayerPanel />
      <Shop />
      <ActionButtons />
    </main>
  );
}
