
import { string } from "prop-types"
import { Flex, Text } from 'controls'

const Tag = ({ className = '', type = '', children, ...props }) => {
    className += ' TAG'
    if (type !== '') className += ` TAG--${type}`
    return (
        <Flex {...props} className={className}>
            <Text>
                {children}
            </Text>
        </Flex>
    )
}

Tag.propTypes = {
    className: string,
    type: string,
}

export { Tag }