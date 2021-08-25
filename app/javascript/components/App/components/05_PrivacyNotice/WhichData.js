
import { Text } from 'controls'
import { Container, TextBold } from "./controls"

const WhichData = () =>
    <Container>
        <TextBold>¿Qué datos personales utilizaremos para estos fines?</TextBold>
        <Text>
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales:
        </Text>
        <Text>Datos de identificación y contacto</Text>
    </Container>

export { WhichData }