
import {Card} from 'controls'

const ModalCard = ({children, ...props}) => {
    return (
        <Card {...props} gap='1em' w100 className='home__achievements__MODAL_CARD'>            
            {children}
        </Card>
    )
}

export {ModalCard}