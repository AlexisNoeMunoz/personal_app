
import { Flex, Text } from 'controls'
import { GitHubLink, LinkedinLink } from 'components/Home/controls'

const containerProps = {
    w100: true,
    className: 'home__contact',
    gap: '1em',
    wrap: true,
    alignX: 'center',
    alignY: 'center',
}

const Contact = () =>     
    <Flex {...containerProps} >        
        <LinkedinLink />
        <GitHubLink />
        <Text className='home__contact__email' light>
            munoz.chavez.alexis.140728@gmail.com
        </Text>
    </Flex>

export { Contact }