
import { useRef } from 'react'
import { useRefOnRender } from 'hooks'
import {Floating, Cover, AboutMe, Skills, Achievements, Contact} from './components'

const Home = () => {    
    const skills = useRef()
    const achievements = useRef()        
    const contact = useRef()
    const elements = useRefOnRender([skills, achievements, contact])

    return (
        <div className="home">
            <Floating elements={elements} />
            <Cover />
            <AboutMe />
            <Skills ref={skills} />
            <Achievements ref={achievements} />       
            <Contact ref={contact} />     
        </div>
    )
}

export default Home