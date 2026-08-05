import showcase1 from "../assets/showcase1.jpg"
import showcase2 from "../assets/showcase2.jpeg"
import showcase3 from "../assets/showcase3.jpg"
import info from "../assets/info.jpeg"
import "../css/main.css"

function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Bluebell Builds</h1>
          <nav>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Constructing our Values</h2>
          <p>Reliable. Professional. Affordable.</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="service-list">
            <div className="service">
              <span className="service-icon">🌟</span>
              <h3>Advocating Our Values</h3>
              <p>We champion integrity, reliability, and professionalism as the foundation for future leadership.</p>
            </div>
            <div className="service">
              <span className="service-icon">🚀</span>
              <h3>Becoming Future Leaders</h3>
              <p>We empower our team to lead with vision and adaptability in a dynamic world.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Recent Projects</h2>
          <div className="project-gallery">
            <div className="project">
              <div className="project-title"><strong>🌟 Classroom Decoration</strong></div>
              <br />
              <div className="gallery">
                <div className="gallery-row">
                  <img src={showcase1} alt="Cupboard" style={{ height: '120px', width: 'auto' }} />
                  <img src={showcase2} alt="Crane" style={{ height: '120px', width: 'auto' }} />
                  <img src={showcase3} alt="Decoration" style={{ height: '120px', width: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:bluebellbuilds@gmail.com">bluebellbuilds@gmail.com</a></p>
          <p>Phone: <a href="tel:+225052026672027">+225 05 20 26 67 2027</a></p>
          <p>Location: Bingerville, Abidjan</p>
        </div>
      </section>

      <footer>
        <div className="container footer-flex">
          <div className="footer-info">
            <p>&copy; 2025 Blue Bell Builds. All rights reserved.</p>
          </div>
          <div className="footer-image">
            <img src={info} alt="Info" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
