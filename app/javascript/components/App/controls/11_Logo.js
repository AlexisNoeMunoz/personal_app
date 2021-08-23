
import { Img } from 'controls'
import ImgLogo from 'images/app/logo.svg'

const Logo = (props) => {
    return (
        <Img src={ImgLogo} maxWidth='10em' {...props} />
    )
}

export {Logo}