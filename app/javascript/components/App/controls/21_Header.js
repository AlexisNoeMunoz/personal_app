
import { createWindowLoader, Flex, Button } from 'controls'
import { Logo } from 'components/App/controls'
import API from 'API'

const Header = () => {
    const handleLogout = async () => {
        const closeLoader = createWindowLoader()
        await API.User.logout()
        closeLoader()
    }

    return (
        <Flex className='app__home__header'>
            <Flex w100 maxWidth='50em' alignY='center' alignX='space-between'>
                <Logo maxWidth='5em' className='app__home__header__logo' />
                <Button onClick={handleLogout} type='danger' className='app__home__header__logout'>
                    Cerrar sesión
                </Button>
            </Flex>
        </Flex>
    )
}

export { Header }