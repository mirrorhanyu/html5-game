'use client'

import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/app/_util/slug";
import { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface HomeProps {
  games: Array<{
    title: string;
    src: string;
    img: string;
    from: string;
  }>;
}

type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export default function Home({ games }: HomeProps) {

  const columnNumber = { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }
  const rowHeight = 30;
  const aspectRatio = 10 / 16;

  const generateLayouts = () => {
    const times = [...Array(games.length)];
    const widths: Record<Breakpoint, number> = { lg: 2, md: 4, sm: 6, xs: 12, xxs: 12 }; 

    const containerWidths: Record<Breakpoint, number> = {
      lg: 1200,
      md: 996, 
      sm: 768, 
      xs: 480, 
      xxs: 320 
    };

    return Object.keys(widths).reduce((memo: Layouts, breakpoint) => {
      const bp = breakpoint as Breakpoint;
      const colWidth = widths[bp];
      const cols = columnNumber![bp];
      const pixelWidthPerGridUnit = containerWidths[bp] / cols;
      const itemPixelWidth = pixelWidthPerGridUnit * colWidth;
      const itemPixelHeight = itemPixelWidth * aspectRatio;
      const itemGridHeight = Math.ceil(itemPixelHeight / rowHeight);
      memo[bp] = [
        ...times.map((_, i): Layout => ({
          x: (i * colWidth) % cols,
          y: 0,
          w: colWidth,
          h: itemGridHeight,
          i: String(i)
        }))
      ];
      return memo;
    }, {} as Layouts);
  }

  return (
    <main className="text-center mt-4">
      <ResponsiveReactGridLayout
        className="layout"
        layouts={generateLayouts()}
        cols={columnNumber}
        rowHeight={rowHeight}
        isDraggable={false}
        isResizable={false}
      >
        {games.map((game, index) => (
          <div key={index} className="text-center">
            <Link href={`/${slugify(game.title)}`} className="w-full h-full block relative">
              <Image src={game.img} alt={game.title} fill className="object-cover rounded-md" />
            </Link>
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </main>
  )
}