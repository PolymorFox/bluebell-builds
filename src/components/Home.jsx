import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
