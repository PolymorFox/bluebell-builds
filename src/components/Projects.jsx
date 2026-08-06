import showcase1 from "../assets/showcase1.jpg"
import showcase2 from "../assets/showcase2.jpeg"
import showcase3 from "../assets/showcase3.jpg"

function Projects() {

  return (
    <section id="projects" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Portfolio</h2>
            <h3 className="text-3xl font-extrabold text-white">Recent Projects</h3>
          </div>
          <span className="text-slate-400 text-sm mt-2 md:mt-0">Showcasing our recent work & installations</span>
        </div>

        <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-6 text-amber-400 font-bold">
            <span>⭐</span>
            <span>Classroom Decoration & Setup</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-2xl bg-slate-900 aspect-video relative border border-slate-800">
              <img src={showcase1} alt="Project Image 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-2xl bg-slate-900 aspect-video relative border border-slate-800">
              <img src={showcase2} alt="Project Image 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-2xl bg-slate-900 aspect-video relative border border-slate-800">
              <img src={showcase3} alt="Project Image 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
