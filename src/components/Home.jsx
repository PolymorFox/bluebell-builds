import "../css/main.css"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
