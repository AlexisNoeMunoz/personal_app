
import { Flex, ButtonClean, Text } from 'controls'
import { ColorHelper } from 'helpers'

const PostUser = ({ user }) => {
    const imgProps = {
        className: 'app__POST__user__img',
        style: {
            '--color': `#${user.color}`,
            '--brightness': ColorHelper.getBrightness(user.color),
        },
        alignY: 'center',
    }
    return (
        <Flex pad='1em' w100 alignX='flex-start'>
            <ButtonClean className='app__POST__user'>
                <Flex {...imgProps} >
                    <Text>
                        {user.name && user.name.substring(0, 2)}
                    </Text>
                </Flex>
                <Text className='app__POST__user__name'>
                    {user.name}
                </Text>
            </ButtonClean>
        </Flex>
    )
}

export default PostUser