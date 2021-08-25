
import { Flex, ButtonClean, Icon, Text } from 'controls'
import { forwardRef } from 'react'

const ContactLink = ({icon, ...props}) => {
    return (
        <ButtonClean anchor target='_blank' className='home__contact__button' {...props}>
            <Icon icon={icon} type='light' />
        </ButtonClean>
    )
}

const containerProps = {
    w100: true,
    className: 'home__contact',
    gap: '1em',
    wrap: true,
    alignX: 'center',
    alignY: 'center',
}

const Contact = forwardRef((props, ref) =>     
    <Flex ref={ref} {...containerProps} >        
        <ContactLink icon='linkedin' href='https://github.com/AlexisNoeMunoz' />
        <ContactLink icon='github' href='https://www.linkedin.com/in/alexis-muñoz-chávez-78881b17a/' />        
        <Text className='home__contact__email' light>
            munoz.chavez.alexis.140728@gmail.com
        </Text>
    </Flex>
)

Contact.displayName = 'Contact'
export { Contact }