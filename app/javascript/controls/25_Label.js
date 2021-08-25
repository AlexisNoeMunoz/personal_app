
import { string } from 'prop-types'
import { Text } from 'controls'

const Label = ({className = '', children, ...props}) => {
    className += ' LABEL'
    return (
        <Text {...props} className={className}>
            {children}
        </Text>
    )
}

Label.propTypes = {
    className: string,
}

export { Label }