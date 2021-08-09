
import { forwardRef } from 'react'
import { Grid, Title } from 'controls'

import BoschCampChallenge from './buttons/BoschCampChallenge'
import InteliGene from './buttons/InteliGene'
import UltraHackathon from './buttons/UltraHackathon'
import PrototiposDGETI from './buttons/PrototiposDGETI'

const Achievements = (props, ref) => {
    return (
        <Grid className="home__achievements" alignY='end' alignContentY='center' w100 ref={ref}>
            <Title className="home__achievements__title" w100 align='center'>
                Logros y Experiencia
            </Title>
            <Grid className="home__achievements__grid" w100 >
                <InteliGene />
                <BoschCampChallenge />                
                <UltraHackathon />
                <PrototiposDGETI />
            </Grid>
        </Grid>
    )
}

export default forwardRef(Achievements)
