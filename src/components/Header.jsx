function Header() {

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-slate-950 rounded-xl font-black text-xl tracking-wider">
                      BB
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Bluebell <span class="text-amber-500">Builds</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
              <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>
          <a href="#contact" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                  Get Started
          </a>
        </div>
      </header>
    </>

  )
}

export default Header
