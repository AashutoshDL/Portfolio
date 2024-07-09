import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skill'
import Socials from '../Socials/Socials'
import Contacts from '../Contacts/Contacts'

const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Education />
      <Projects />
      <Skills />
      <Socials />
      <Contacts />
    </div>
  )
}

export default Home
