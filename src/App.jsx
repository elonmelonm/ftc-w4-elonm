import { Bento } from "./components/Bento"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HeroVideo } from "./components/HeroVideo"


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
      </div>
    </>
  )
}

export default App
