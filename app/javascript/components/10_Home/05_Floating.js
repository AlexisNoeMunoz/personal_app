

import { useScrollInSections } from 'hooks'
import { Grid, ButtonClean, Icon } from "controls"

const Floating = ({elements=[]}) => {
    
    const scrollUp = () => useScrollInSections({up: true, elements})
    const scrollDown = () => useScrollInSections({elements})    

    return (
        <Grid className='home__floating' gap='1em'>
            <ButtonClean type='float' pad='1em' className='home__floating__button' onClick={scrollUp}>
                <Icon icon='arrow' type='light' deg={-90} />
            </ButtonClean>

            <ButtonClean type='float' pad='1em' className='home__floating__button' onClick={scrollDown}>
                <Icon icon='arrow' type='light' deg={90} />
            </ButtonClean>
        </Grid>
    )
}

export default Floating