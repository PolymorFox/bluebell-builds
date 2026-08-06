function ServiceItem({icon ,title, description }) {

  return (
    <>
      <div className="service">
        <span className="service-icon">{ icon }</span>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    </>
  );
}

function Services() {
  const services = [
    {
      icon: "🌟",
      title: "Advocating Our Values",
      description: "We champion integrity, reliability, and professionalism as the foundation for future leadership."
    },
    {
      icon: "🚀",
      title: "Becoming Future Leaders",
      description: "We empower our team to lead with vision and adaptability in a dynamic world."
    }
  ];

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="service-list">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services
