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
          <div class="container-white-text" id='projects'>
            <h2> Projects </h2>

            <div class='web-based'>
              <h1>Web-Based</h1>
              
              <div class='web-based-projects'> 
                <div class='section1'>
                  <img class='project-web-img1' src = {CLID1} />
                  <div id='hide1'>CLID is a responsive fullstack e-commerce app that has three different HTML pages including HOME, SALE, and Shopping Cart. I made API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations, and used Mongoose to define schemas for MongoDB collections.</div>
                </div>
                <div class='section2'>
                  <img class='project-web-img2' src = {Fork1} />
                  <div id='hide2'>Overlap2</div>
                </div>
              </div>
            </div>

            {/* For proejct description, reference the README pages. Update projects in resume to match portfolio*/}

            <div class='mobile-apps'>
              <h1>Mobile Apps</h1>

              <div class='mobile-projects'>
                <div class='section1'>
                  <img class='mobile-img1' src = {DADA1} />
                  <div id='hide3'>Overlap3</div>
                </div> 

                <div class='section2'>
                  <img class='mobile-img2' src = {Wimf1} />
                  <div id='hide4'>Overlap4</div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </>
    )
}
  
  export default Projects