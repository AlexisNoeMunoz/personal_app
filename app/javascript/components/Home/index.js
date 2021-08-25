
import { useRef } from 'react'
import { useRefOnRender } from 'hooks'
import {Floating, Cover, AboutMe, Skills, Achievements, Contact} from './components'

const Home = () => {    
    const skills = useRef()
    const achievements = useRef()        
    const elements = useRefOnRender([skills, achievements])

    return (
        <div className="home">
            <Floating elements={elements} />
            <Cover />
            <AboutMe />
            <Skills ref={skills} />
            <Achievements ref={achievements} />       
            <Contact />     
        </div>
    )
}

export default Home