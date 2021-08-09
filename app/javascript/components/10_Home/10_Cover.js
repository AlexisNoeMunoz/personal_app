
import { forwardRef } from 'react'
import {Grid, Title, Text} from 'controls'

import useAboutMeInfo from "./hooks/useAboutMeInfo"

const Cover = (props, ref) => {
    return (
        <Grid className="home__cover" w100 gap='1.5em' alignContentY='center' ref={ref}>
            <Grid className="home__cover__bio" gap='1em'> 
                <div className="home__cover__bio__photo" />
                <Title className="home__cover__bio__title" light align='center'>
                    Desarrollador Web
                </Title>
            </Grid>
            <Text className="home__cover__intro" light>
                {useAboutMeInfo()}
            </Text>
        </Grid>
    )
}

export default forwardRef(Cover)