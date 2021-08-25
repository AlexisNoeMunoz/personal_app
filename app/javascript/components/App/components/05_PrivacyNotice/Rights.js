
import { Text, List, ListItem } from 'controls'
import { Container, TextBold } from "./controls"

const Rights = () =>
    <Container>
        <TextBold>
            ¿Cómo puede acceder, rectificar o cancelar sus datos personales,
            u oponerse a su uso o ejercer la revocación de consentimiento?
        </TextBold>
        <Text>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para
            qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es
            su derecho solicitar la corrección de su información personal en caso de que esté
            desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de
            nuestros registros o bases de datos cuando considere que la misma no está siendo
            utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales
            para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
        </Text>
        <Text>
            Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía
            correo electrónico a munoz.chavez.alexis.140728@gmail.com y deberá contener:
        </Text>
        <List>
            <ListItem>Nombre completo del titular.</ListItem>
            <ListItem>Domicilio.</ListItem>
            <ListItem>Teléfono.</ListItem>
            <ListItem>Correo electrónico usado en este sitio web.</ListItem>
            <ListItem>Copia de una identificación oficial adjunta.</ListItem>
            <ListItem>Asunto «Derechos ARCO»</ListItem>
        </List>
        <Text>
            Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más
            no limitativa los siguientes: Revocación del consentimiento para tratar sus datos
            personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o
            Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a
            Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos
            personales, deberá indicar la modificación exacta y anexar la documentación soporte; es
            importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos
            los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es
            posible que por alguna obligación legal requiramos seguir tratando sus datos
            personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de
            su consentimiento implicará que no le podamos seguir prestando el servicio que nos
            solicitó, o la conclusión de su relación con nosotros.
        </Text>
        <Text>
            ¿En cuántos días le daremos respuesta a su solicitud? <br />
            5 días
        </Text>
        <Text>
            ¿Por qué medio le comunicaremos la respuesta a su solicitud?<br />
            Al mismo correo electrónico de donde se envío la petición.
        </Text>
    </Container>

export { Rights }