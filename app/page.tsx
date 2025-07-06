'use client'

import styles from "@/app/page.module.css";
import games from "@/app/games.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center mt-4">
      <section className={styles.contentArea}>
        {games.map((game, index) => (
          <div
            key={index}
            className={`bg-blue-500 text-center relative ${styles[`top${index + 1}`]}`}
          >
            <Link 
              href={`/${game.title}?src=${encodeURIComponent(game.src)}`}
            >
              <Image src={game.img} alt={game.title} fill className="object-cover" />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
