'use client'

import Link from "next/link";
import { slugify } from "../_util/slug";
import Image from "next/image";

export interface GameProps {
  game: {
    title: string;
    src: string;
    img: string;
    from: string;
    detail: string;
  };
  games: Array<{
    title: string;
    src: string;
    img: string;
    from: string;
  }>;
}

export default function Game({ game, games }: GameProps) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="row-start-1 col-span-12 md:col-span-9 flex flex-col">
        <iframe
          src={`${game.src}`}
          className="w-full aspect-[839/472]"
          allow="fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope" />
        <div className="bg-[oklch(1_0_0)] h-20 flex justify-between items-center">
          <span className="prose text-xl font-bold pl-5">
            {game.title}
          </span>
          <button
            onClick={() => {
              const iframe = document.querySelector('iframe');
              if (iframe) {
                if (iframe.requestFullscreen) {
                  iframe.requestFullscreen();
                }
              }
            }}
            className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-md h-fit mr-5"
          >
            Fullscreen
          </button>
        </div>
      </div>

      <div className="row-start-1 row-span-2 col-span-3 col-start-10 hidden md:block">
        <div className="grid grid-cols-2 gap-2">
          {games
            .sort(() => Math.random() - 0.5)
            .slice(0, 26)
            .map((game, index) => (
              <div key={index} className="text-center aspect-[16/10]">
                <Link href={`/${slugify(game.title)}`} className="w-full h-full block relative">
                  <Image src={game.img} alt={game.title} fill className="object-cover rounded-md" />
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="row-start-2 bg-[oklch(1_0_0)] col-span-12 md:col-span-9 px-4 py-2">
        <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: game.detail }} />
      </div>

    </div>
  )
}