import { Autonomie } from "./components/Autonomie"
import { Bento } from "./components/Bento"
import { BuyFooter } from "./components/BuyFooter"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HeroVideo } from "./components/HeroVideo"
import { Mynthos } from "./components/Mynthos"
import { Plug } from "./components/Plug"
import { PlugNTote } from "./components/PlugNTote"
import { Spotify } from "./components/Spotify"
import { Testimonials } from "./components/Testimonials"


function App() {

  return (
    <>
      <div className="bg-[#FAF6F3]">
        <div className="relative flex flex-col h-[1460px]">
          <Header />
          <HeroVideo />
          <Hero />
        </div>
        <Bento />
        <PlugNTote />
        <Plug />
        <Autonomie />
        <Spotify />
        <Mynthos />
        <Testimonials />
        <BuyFooter />
      </div>
    </>
  )
}

export default App
