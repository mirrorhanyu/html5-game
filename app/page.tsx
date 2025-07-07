import games from "@/app/_config/games.json";
import Home from "@/app/_ui/home";

export default function HomePage() {
  return (
    <Home games={games} />
  );
}
