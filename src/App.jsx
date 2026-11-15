import { Autonomie } from "./components/Autonomie"
import { BackToTop } from "./components/BackToTop"
import { Bento } from "./components/Bento"
import { GridLines } from "./components/GridLines"
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
      <div className="relative isolate bg-[#FAF6F3] overflow-x-clip">
        <GridLines />
        <div className="relative flex flex-col h-[971px] md:h-[calc(100vw*789/1920+831px)]">
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
        <BackToTop />
      </div>
    </>
  )
}

export default App
