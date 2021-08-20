
import { Flex, Img } from 'controls'

const ModalFloatingTop = ({ children, ...props }) => {
    const className = 'home__achievements__MODAL_FLOATING_TOP'
    return (
        <Flex className={className} maxWidth='13em' w100 alignY='center' gap='1em' {...props}>
            {children}
        </Flex>
    )
}

const ModalFloatingTopImg = (props) => <Img maxWidth='2em' {...props} />

export { ModalFloatingTop, ModalFloatingTopImg }