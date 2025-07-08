'use client'

import styles from "@/app/_ui/home.module.css";
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

  const generateLayouts = () => {
    const times = [...Array(games.length)];
    const widths: Record<Breakpoint, number> = { lg: 2, md: 4, sm: 6, xs: 12, xxs: 12 };
    return Object.keys(widths).reduce((memo: Layouts, breakpoint) => {
      const bp = breakpoint as Breakpoint;
      const width = widths[bp];
      const cols = columnNumber![bp];

      memo[bp] = [
        ...times.map((_, i): Layout => ({
          x: (i * width) % cols,
          y: 0,
          w: width,
          h: 4,
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
          rowHeight={30}
          width={1200}
        >
          {games.map((game, index) => (
            <div
              key={index}
              className={`text-center relative ${styles[`top${index + 1}`]}`}
            >
              <Link href={`/${slugify(game.title)}`}>
                <Image src={game.img} alt={game.title} fill className="object-cover rounded-md" />
              </Link>
            </div>
          ))}
        </ResponsiveReactGridLayout>
    </main>
  )
}