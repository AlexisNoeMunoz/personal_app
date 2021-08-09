
import { useBoolState } from 'hooks'
import { ButtonGrid, Modal, Icon, Title, Flex} from 'controls'

const AchievementBox = ({
    children,
    className = '',
    title = '',
}) => {

    const [show, setShow] = useBoolState(false)

    const IMG_CLASS = `
        home__achievement__button__img 
        home__achievement__button__img--${className}`

    return (
        <>
            <ButtonGrid className="home__achievement__button" onClick={setShow} gap='0.5em'>
                <div className={IMG_CLASS} />                
                <Icon className='home__achievement__button__arrow' type='light' icon='arrow' />                
            </ButtonGrid>

            <Modal {...{ show, setShow }} alignContentY='start' gap='1.5em'>
                <Title align='center'>{title}</Title>                
                {children}
            </Modal>
        </>
    )
}

import { string } from 'prop-types'
AchievementBox.protoTypes = {
    className: string.isRequired,
    title: string,
}

export default AchievementBox