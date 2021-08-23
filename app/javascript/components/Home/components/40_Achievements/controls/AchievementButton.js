
import { useBoolState } from 'hooks'
import { ButtonGrid, Modal, Title, Img, Icon, Text, Flex} from 'controls'

const AchievementButton = ({
    children,
    className = '',
    title = '',
    img,
    alt = '',
}) => {

    const [show, setShow] = useBoolState(false)    

    const IMG_CLASS = `
        home__achievements__BUTTON
        home__achievements__BUTTON--${className}`

    return (
        <>
            <ButtonGrid className={IMG_CLASS} onClick={setShow} gap='0.5em'>
                <Img className='home__achievements__BUTTON__img' src={img} alt={alt} /> 
                <Flex gap='0.5em' alignY='center' className='home__achievements__BUTTON__mask'>
                    <Icon icon='see' type='light' />
                    <Text light >Ver</Text>
                </Flex>
            </ButtonGrid>

            <Modal {...{ show, setShow }} alignContentY='start' gap='1.5em'>
                <Title align='center'>{title}</Title>                
                {children}
            </Modal>
        </>
    )
}

import { string } from 'prop-types'
AchievementButton.protoTypes = {
    className: string.isRequired,
    title: string,
    alt: string,
}

export {AchievementButton}