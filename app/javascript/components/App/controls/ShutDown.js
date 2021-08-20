
import {Icon, ButtonClean, Text} from 'controls'
import { bool, string } from 'prop-types'

const ShutDown = ({className= '', floating=false}) => {    

    className += ' app__SHUT_DOWN'
    if(floating) className += ' app__SHUT_DOWN--floating'

    return (
        <ButtonClean direction='column' className={className} href='/' anchor>
            <Icon icon='shut_down' />
            <Text>Salir</Text>
        </ButtonClean>
    )
}

ShutDown.propTypes = {
    className: string,
    floating: bool,
}

export {ShutDown}