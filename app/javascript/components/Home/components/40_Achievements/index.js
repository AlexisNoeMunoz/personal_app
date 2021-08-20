
import { forwardRef } from 'react'
import { Grid, Title } from 'controls'

import {BoschCampChallenge, InteliGene} from './components'
import {UltraHackathon, PrototiposDGETI} from './components'

const Achievements = forwardRef((props, ref) => {
    return (
        <Grid className="home__achievements" alignY='end' alignContentY='center' w100 ref={ref}>
            <Title className="home__achievements__title" w100 align='center'>
                Logros y Experiencia
            </Title>
            <Grid className="home__achievements__grid" w100 >
                <InteliGene />
                <UltraHackathon />
                <BoschCampChallenge />                                
                <PrototiposDGETI />
            </Grid>
        </Grid>
    )
})

Achievements.displayName = 'Achievements'
export {Achievements}
