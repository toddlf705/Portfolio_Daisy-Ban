import { Link, Element } from 'react-scroll'

const Nav = () => {
    return (
    <>
        <div class="background-dark">
            <div class="container-white" id="nav">
                <nav class="nav">
                    <a href="/"> About</a>
                    <Link to="skills" smooth={true} offset={-200} duration={500}> Skills</Link>
                    <Link to="projects" smooth={true} offset={-85} duration={500}> Projects</Link>
                    <Link to="contacts" smooth={true} duration={500}> Contacts</Link>
                </nav>
            </div>
        </div>
    </>
    )
}
  
  export default Nav