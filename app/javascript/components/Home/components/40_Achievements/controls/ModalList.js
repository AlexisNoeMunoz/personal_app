
import { List } from 'controls'

const ModalList = ({children, ...props}) => {
    const className = 'home__achievements__MODAL_LIST'
    return (
        <List w100 className={className} {...props} >
            {children}
        </List>
    )
}

export { ModalList }