function Hero() {

  return (
    <>
      <section class="relative overflow-hidden py-24 md:py-32 border-b border-slate-800">
          <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span class="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20 mb-6">
              Constructing Our Values
            </span>
            <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Reliable. Professional. <br class="hidden sm:block"/>
              <span class="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Affordable.
              </span>
            </h1>
            <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              We champion integrity, reliability, and modern craftsmanship to lead projects with vision and precision.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
              <a href="#projects" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/25">
                View Our Projects
              </a>
              <a href="#contact" class="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>
    </>
  );
}

export default Hero
