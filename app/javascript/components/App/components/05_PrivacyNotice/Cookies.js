
import { Text } from 'controls'
import { Container, TextBold } from './controls'

const Cookies = () =>
    <Container>
        <TextBold>El uso de tecnologías de rastreo en nuestro portal de internet</TextBold>
        <Text>
            Le informamos que en nuestra página de internet utilizamos cookies, web beacons
            u otras tecnologías, a través de las cuales es posible monitorear su comportamiento
            como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar
            en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo
            son los siguientes:
        </Text>
        <Text>
            Identificadores, nombre de usuario y contraseñas de sesión, Idioma preferido por el
            usuario, Fecha y hora del inicio y final de una sesión de un usuario.
        </Text>
        <Text>
            Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer
            cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso
            de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas
            en nuestros sitio web.
        </Text>
    </Container>

export { Cookies }