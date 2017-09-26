// About
import React from 'react';
import styles from './style.css';
import { Button } from 'react-bootstrap'
import iMeetup from './images/meetup-swarm.svg'
import iBackground from './images/green-keyboard.1905x942.png'
import classNames from 'classnames'
import SectionTitle from '../../elements/SectionTitle'

const Header = () => {
  const aboutSection = {
    backgroundImage: iBackground,
    backgroundSize: 'cover',
  }
  const taglineStyles = classNames({
    [styles.tagline]: true,
    'greenText': true,
  })
  const subTaglineStyles = classNames({
    [styles.subTagline]: true,
    'greenText': false,
  })

  return (
    <div className='wrapperFullWidth' style={aboutSection}>
      <div className='wrapperMaxWidth1080'>
        <div className='wrapperNarrowText'>
          <h2 className={taglineStyles}>Learn&nbsp;&nbsp;Build&nbsp;&nbsp;Grow&nbsp;&nbsp;Succeed</h2>
          <h4 className={subTaglineStyles}>A place to learn, collaborate, and become a software developer</h4>
          <p>Tri-Valley Coders is a place to learn a wide spectrum of software development skills including: writing high quality code, using developer tools and collaborating on projects. We offer the not just learning experiences but the opportunity to work on actual projects for real clients.</p>
          <p>We have a collaborative and supportive structure with roles for beginners as well as experienced devlopers to learn new skills. Both our members and organizers bring a wide variety of experience and skill levels.</p>
          <p>We meet every Thursday from 9:00am to 12:00pm with emphasis on Web development using JavaScript, HTML, CSS and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
          <SectionTitle colorName='green'>Our Philosophy</SectionTitle>
          <p><b><em>Don't Code Alone</em></b>: While self-study is an essential part of learning to make software, interacting with others is equally if not more important. When you learn by yourself you are alone with your own version of how to learn, or you are taking advice (sometimes good) online from people who have never met you. Further more, coding is a social and collaborative activity in which you work with other developers as well as members of QA, Project Management and much more.</p>
          <p><b><em>It's Called "Making Software"</em></b>: 'Learning to code' is all the rage but developers aren't hired to write code. Employers & clients need software they can deploy and that requires many skills in addition to coding, both technical and social.</p>
          <div className='joinUsButtonContainer'>
            <Button bsStyle='success'>
              <img className='joinMeetupLogo' src={iMeetup} width={45} alt='meetup logo'/>
              <span className='joinUsText'>Join Us via Meetup!</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
