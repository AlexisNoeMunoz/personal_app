
import { forwardRef } from 'react'
import {Flex, Text} from 'controls'

import useAboutMeInfo from "./hooks/useAboutMeInfo"

const AboutMe = (props, ref) => {
    return (
        <Flex className="home__about_me" w100 ref={ref}>
            <Text className="home__about_me__intro">
                {useAboutMeInfo()}            
            </Text>
        </Flex>
    )
}

export default forwardRef(AboutMe)