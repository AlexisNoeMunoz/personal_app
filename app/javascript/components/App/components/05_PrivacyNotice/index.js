
import { Grid, Text, Subtitle } from 'controls'
import { AbstractGrid, AboutMeLink } from 'components/App/controls'
import { Usage } from './Usage'
import { WhichData } from './WhichData'
import { Rights } from './Rights'
import { Cookies } from './Cookies'
import { Updates } from './Updates'

const PrivacyNotice = () => {
    return (
        <AbstractGrid className='app__login'>
            <Grid className='app__privacy_notice' alignX='start'>
                <Subtitle>Aviso de privacidad integral</Subtitle>
                <Text>
                    Alexis Noe Muñoz Chavez mejor conocido como Alexis Muñoz, con
                    domicilio en Armando Gonzalez Soto 7644, los alcaldes, Juárez, Chihuahua, México
                    y portal de internet {location.origin}, es el responsable
                    del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                </Text>
                <Usage />
                <WhichData />
                <Rights />
                <Cookies />
                <Updates />
                <Text>Última actualización de este aviso de privacidad: 24/08/2021</Text>
            </Grid>
            <AboutMeLink />
        </AbstractGrid>
    )
}

export { PrivacyNotice }