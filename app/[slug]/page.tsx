import games from '@/app/_config/games.json'
import { slugify } from '@/app/_util/slug';
import Game from '@/app/_ui/game';

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ src?: string }>
}) {
  const { slug } = await params
  const game = games.find(g => slugify(g.title) === slug);

  if (!game) {
    throw new Error(`Game not found: ${slug}`);
  }

  return (
    <Game game={game} />
  )
}