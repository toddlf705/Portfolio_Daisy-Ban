import CLID1 from "../assets/CLID.jpg"
import CLID2 from "../assets/CLID2.jpg"
import DADA1 from "../assets/DADA1.jpg"
import DADA2 from "../assets/DADA2.jpg"
import Fork1 from "../assets/Fork1.jpg"
import Fork3 from "../assets/Fork3.jpg"
import Wimf1 from "../assets/Wimf1.jpg"

const Projects = () => {
    return (
      <>
        <div class="background-dark">
          <div class="container-white" id='projects'>
            <h2> Projects </h2>
            <div class='web-based'>
              <h1>Web-Based</h1>
              <img src = {CLID1} width="50%" />
              <img src = {Fork1} width="50%" />
              <p>CLID: express project / e-commerce website for clothing</p>
            </div>
            <div>
              <h1>Mobile Apps</h1>
              <img src = {DADA1} width="20%" />
              <img src = {Wimf1} width="20%" />
              <p>Latte Andante: </p>
            </div>
          </div>
        </div>
      </>
    )
}
  
  export default Projects