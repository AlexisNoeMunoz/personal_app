
import { Grid, Flex} from 'controls'
import { bool, string } from 'prop-types'

const Card = ({
    children,
    className = '',
    flex = false,
    ...props }) => {
    
    const Container = flex ? Flex : Grid
    className += ' CARD'            

    return (
        <Container {...props} {...{className}}>
            {children}
        </Container>
    )
}

Card.propTypes = {
    className: string,
    flex: bool,
}

export {Card}