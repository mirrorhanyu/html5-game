'use client'

export interface GameProps {
    game: {
      title: string;
      src: string;
      img: string;
      from: string;
      detail?: string;
    };
  }

export default function Game({ game }: GameProps) {
  return (
      <article className="prose">
          <h1>{game.title}</h1>
          <iframe
            src={`${game.src}`}
            className="w-214 h-117"
            allow="fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope" />
          {game.detail && (
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: game.detail }} />
          )}
      </article>
  )
}