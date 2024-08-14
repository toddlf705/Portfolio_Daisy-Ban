import daisypic from '../assets/daisypic.jpg'

const About = () => {
    return (
      <>
        <div class="background-dark">
          <div class="container-white-text" id='about_me'>
            <h2>About Me</h2>
            <div class='slide-left'id='myname'>DAISY BAN</div>
            <div><img class='daisypic' src={daisypic} /></div>
            <div class='slide-right' id='intro-p'> I’m a Full Stack Software Engineer who finds an elevated interest in developing softwares. My background is in the entertainment field and a little bit of accounting. As a Spotify artist and a dance instructor, I enjoyed working with a team of  creative minds. The whole process  of creating and fabricating nothing into something is very powerful and intriguing. I want to bring my creativity into the logical world of front-end software engineering as well as my past accounting experiences into debugging and backend world.</div>
          </div>
        </div>
      </>
    )
  }
  
  export default About