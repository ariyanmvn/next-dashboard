import { Inter } from "next/font/google";

import Hero from "@/subComponents/Hero";
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <main>
        <header>
          <Hero></Hero>
        </header>
      </main>
    </div>
  );
}
