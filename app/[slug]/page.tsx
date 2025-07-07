import games from '@/app/_config/games.json'
import { slugify } from '@/app/_util/slug';

export default async function Game({
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
    <div>
      <h1>{game.title}</h1>
      <iframe
        src={`${game.src}`}
        className="w-214 h-117"
        allow="fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope" />
    </div>
  )
}