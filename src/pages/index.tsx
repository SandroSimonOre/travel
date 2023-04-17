//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })
import { Hero } from "@/components/hero"
import { Recommended } from "@/components/recommended"
import { Featured } from "@/components/featured"
import { Faqs } from "@/components/faqs"

export default function Home() {

  return (
    <main className="">
      <Hero />
      <Recommended />
      <Featured />
      <Faqs />

    </main>
  )
}
