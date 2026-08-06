import showcase1 from "../assets/showcase1.jpg"
import showcase2 from "../assets/showcase2.jpeg"
import showcase3 from "../assets/showcase3.jpg"

function Projects() {

  return (
    <>
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
    </>
  )
}

export default Projects
