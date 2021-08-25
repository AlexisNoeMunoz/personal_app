
import { forwardRef } from 'react'
import { Grid, Title, Text, Button, Img, Flex } from 'controls'
import { GitHubLink, LinkedinLink } from 'components/Home/controls'

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

            <Grid gap='1em'>
                <Button type='success' anchor href='app' target="_blank">
                    Ir a la demo
                </Button>            
                <Button className='home__cover__download' anchor href='cv' target='_blank'>
                    Descargar CV
                </Button>
                <Flex wrap gap='1em'>
                    <LinkedinLink />
                    <GitHubLink />
                </Flex>
                <Text light>
                    munoz.chavez.alexis.140728@gmail.com
                </Text>
            </Grid>
        </Grid>
    )
})

Cover.displayName = 'Cover'
export {Cover}