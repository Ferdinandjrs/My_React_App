import Navbar from "./slicing/Navbar"
import Hero from "./slicing/Hero"
import Stats from "./slicing/Stats"
import Features from "./slicing/Features"
import Testimonials from "./slicing/Testimonials"
import Pricing from "./slicing/Pricing"
import FAQ from  "./slicing/FAQ"
import Footer from "./slicing/Footer"

function App() {
  return(
    <>
    <Navbar></Navbar>
    <main>
      <Hero></Hero>
      <Stats></Stats>
      <Features></Features>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <FAQ></FAQ>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App