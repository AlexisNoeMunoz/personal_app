

import { useScrollInSections } from 'hooks'
import { Grid, ButtonClean, Icon } from "controls"

const FloatingButton = ({onClick, deg}) =>  
    <ButtonClean type='float' pad='1em' className='home__floating__button' onClick={onClick}>
        <Icon icon='arrow' type='light' deg={deg} />
    </ButtonClean>    

const Floating = ({elements=[]}) => {

    const scrollUp = () => useScrollInSections({up: true, elements})
    const scrollDown = () => useScrollInSections({elements})    

    return (
        <Grid className='home__floating' gap='1em'>            
            <FloatingButton onClick={scrollUp} deg={-90} />
            <FloatingButton onClick={scrollDown} deg={90} />
        </Grid>
    )
}

export {Floating}