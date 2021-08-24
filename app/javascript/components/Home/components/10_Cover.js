
import { forwardRef } from 'react'
import { Grid, Title, Text, Button, Img } from 'controls'

import {useAboutMeInfo} from "components/Home/hooks"

import ImgPhoto from 'images/home/photo.jpg'

const Cover = forwardRef((props, ref) => {
    return (
        <Grid className="home__cover" w100 gap='2em' alignContentY='center' ref={ref}>
            <Grid gap='1em'>                                
                <Img src={ImgPhoto} className='home__cover__photo' />
                <Title light align='center'>
                    Alexis Noé Muñoz Chávez
                </Title>                
            </Grid>

            <Text className="home__cover__intro" light>
                {useAboutMeInfo()}
            </Text>

            <Button type='success' anchor href='app' target="_blank">
                Ir al portafolio
            </Button>            
        </Grid>
    )
})

Cover.displayName = 'Cover'
export {Cover}