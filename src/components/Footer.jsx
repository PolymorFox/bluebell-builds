import info from "../assets/info.jpeg"

function Footer() {
  return (
    <>
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
  )
}

export default Footer
