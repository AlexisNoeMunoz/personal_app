
import { Text, ListItem } from 'controls'
import { ModalCard, ModalList, ModalFloatingTop, ModalFloatingTopImg } from "../../../controls"

import ImgJava from 'images/home/skills/java.svg'
import ImgPython from 'images/home/skills/python.svg'

const Python = () => {
    const style = {
        paddingTop: '0.2em',
        paddingBottom: '0.2em'
    }
    return (
        <ModalCard>
            <ModalFloatingTop style={style} >
                <ModalFloatingTopImg src={ImgJava} maxWidth='2.5em' />
                <ModalFloatingTopImg src={ImgPython} maxWidth='2.5em' />
            </ModalFloatingTop>

            <Text w100>
                <b>Java</b> para aplicaciones de escritorio aunque fue por poco tiempo.                 
            </Text>            
            <ModalList>
                <ListItem>Conexiones a bases de datos MySQL</ListItem>
                <ListItem>Diseño de interfaces con Java FX</ListItem>
            </ModalList>

            <Text w100>                
                <b>Python</b> para automatizar algunas tareas mediantes scripts.
            </Text>            
            <ModalList>
                <ListItem>Conexiones a bases de datos MySQL</ListItem>
                <ListItem>Conexiones a bases de datos MongoDB</ListItem>
            </ModalList>

        </ModalCard>
    )
}

export { Python }