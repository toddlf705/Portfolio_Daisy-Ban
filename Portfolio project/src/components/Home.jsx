import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import Resume from './Resume'

const Nav = () => {
    return (
        <div>
           <Link to="/"> Home </Link>
           <Link to="/About"> About </Link>
           <Link to="/Portfolio"> Portfolio </Link>
           <Link to="/Contacts"> Contacts </Link>
           <Link to="/Resume"> Resume </Link>
           
           <Routes>
                <Route path="/About"
                       element={<About/>}/>
                <Route path="/Portfolio"
                       element={<Portfolio/>}/>
                <Route path="/Contacts"
                       element={<Contacts/>}/>
                <Route path="/Resume"
                       element={<Resume/>}/>
            </Routes>
            <h2>I am home</h2>
        </div>
    )
}

export default Nav