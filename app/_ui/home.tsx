'use client'

import styles from "@/app/_ui/home.module.css";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/app/_util/slug";

export interface HomeProps {
  games: Array<{
    title: string;
    src: string;
    img: string;
    from: string;
  }>;
}

export default function Home({ games }: HomeProps) {
  return (
    <main className="text-center mt-4">
      <section className={styles.contentArea}>
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
      </section>
    </main>
  )
}