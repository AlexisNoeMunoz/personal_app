
import { Grid, Button, createWindowLoader } from 'controls'
import { AbstractGrid, Logo } from 'components/App/controls'
import API from 'API'

const Home = () => {    
    const handleLogout = async () => {
        const closeLoader = createWindowLoader()
        await API.User.logout()
        closeLoader()
    }
    return (
        <AbstractGrid className='app__home' alignContentY='start'>
            <Grid className='app__home__header'>
                <Logo maxWidth='5em' />
                <Button onClick={handleLogout} type='danger'>Cerrar sesión</Button>
            </Grid>            
        </AbstractGrid>
    )
}

export { Home }