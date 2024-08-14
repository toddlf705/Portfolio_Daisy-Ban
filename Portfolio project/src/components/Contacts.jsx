import email from "../assets/email.png"
import location from "../assets/location.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import youtube from "../assets/youtube.png"
import { Element } from 'react-scroll'

const Contacts = () => {
    return (
    <Element name='contacts'>
      <div class='contacts_container'>
        <h2> Contacts</h2>
        <div class='contacts_sns'>
          <a href='https://github.com/toddlf705'><img class='sns' src={github} width='60px'/></a>
          <a href='https://www.linkedin.com/in/daisy-ban'><img class='sns' src={linkedin} width='60px'/></a>
          <a href='https://www.youtube.com/@daisychannell'><img class='sns' src={youtube} width='60px'/></a>
          <a href='https://www.instagram.com/daisy.ban'><img class='sns' src={instagram} width='60px'/></a>
        </div>

        <div>
          <img src = {location} width="10%" />
          <h1>Atlanta</h1>
          <img src = {email} width="10%" />
          <h1>toddlf705@gmail.com</h1>
        </div>
        
      </div>
    </Element>
    )
  }
  
  export default Contacts