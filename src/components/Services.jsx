function Services() {
  const services = [
    {
      icon: "⭐",
      title: "Advocating Our Values",
      description: "We champion integrity, reliability, and professionalism as the foundation for future leadership and quality execution."
    },
    {
      icon: "🚀",
      title: "Becoming Future Leaders",
      description: "We empower our team to lead with vision and adaptability in a dynamic world, ensuring high-standard results every time."
    }
  ];

  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Our Mission</h2>
        <p className="text-3xl font-extrabold text-white">Built on Strong Foundations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 text-2xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services
