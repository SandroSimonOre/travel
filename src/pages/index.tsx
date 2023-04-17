//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })
import { Hero } from "@/components/hero"
import { Recommended } from "@/components/recommended"
import { Featured } from "@/components/featured"
import { Faqs } from "@/components/faqs"
import { TabBar } from "@/components/tabBar"
import { Footer } from "@/components/footer"

export default function Home() {

  return (
    <main className="">
      <Hero />
      <Recommended />
      <Featured />
      <Faqs />
      <Footer />
      <TabBar />

    </main>
  )
}
