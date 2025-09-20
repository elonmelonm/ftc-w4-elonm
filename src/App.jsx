import { Bento } from "./components/Bento"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HeroVideo } from "./components/HeroVideo"
import { PlugNTote } from "./components/PlugNTote"


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
      </div>
    </>
  )
}

export default App
