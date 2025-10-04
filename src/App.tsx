import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50 dark:bg-gray-900 font-['Inter'] text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
