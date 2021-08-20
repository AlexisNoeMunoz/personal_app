
import { forwardRef, useState } from 'react'
import {Flex, Text} from 'controls'

import {useAboutMeInfo} from "components/Home/hooks"

const AboutMe = forwardRef((props, ref) => {
    return (
        <Flex className="home__about_me" w100 ref={ref}>
            <Text className="home__about_me__intro">
                {useAboutMeInfo()}            
            </Text>
        </Flex>
    )
})

AboutMe.displayName = 'AboutMe'
export {AboutMe}
