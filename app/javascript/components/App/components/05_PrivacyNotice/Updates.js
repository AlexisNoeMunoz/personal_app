
import { Text } from 'controls'
import { Container, TextBold } from './controls'

const Updates = () =>
    <Container>
        <TextBold>¿Cómo puede conocer los cambios en este aviso de privacidad?</TextBold>
        <Text>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas
            de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios
            que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o
            por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los
            cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el
            sitio web {location.origin}.
        </Text>
    </Container>

export { Updates }