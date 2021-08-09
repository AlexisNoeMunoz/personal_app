
import { useRef } from 'react'
import { useRefOnRender } from 'hooks'

import Floating from './05_Floating'
import Cover from './10_Cover'
import AboutMe from './20_AboutMe'
import Skills from './30_Skills'
import Achievements from './40_Achievements'

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
        </div>
    )
}

export default Home

/*
    # nombre
    # lenguajes
    # logros
    # portafolio
    # contacto
*/