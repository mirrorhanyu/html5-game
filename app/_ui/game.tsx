'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="m-4 w-full grid grid-cols-12 gap-4">
      <Card className="col-span-12 md:col-span-9">
        <CardHeader>
          <CardTitle>{game.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <iframe
              src={`${game.src}`}
              className="w-full aspect-[839/472]"
              allow="fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope" />
            <button 
              onClick={() => {
                const iframe = document.querySelector('iframe');
                if (iframe) {
                  if (iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                  }
                }
              }}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/75 text-white px-3 py-1 rounded-md"
            >
              Fullscreen
            </button>
          </div>
        </CardContent>
      </Card>
    
      <Card className="mt-4 col-span-12 md:col-span-9">
        <CardHeader>
            <CardTitle>{game.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <article className="prose">
            {game.detail && (
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: game.detail }} />
            )}
          </article>
        </CardContent>
      </Card>
      <div className="bg-red-500 col-span-3 col-start-10 row-start-1 hidden md:block">
        Hello World
      </div>
    </div>
  )
}