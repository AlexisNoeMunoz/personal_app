
import { Text, ListItem, Img } from "controls"
import { ModalFloatingTop, ModalCard, ModalList } from "../../../controls"

import ImgMySQL from 'images/home/skills/mysql.svg'

const MySQL = () => {
    return (
        <ModalCard>
            <ModalFloatingTop maxWidth='6em'>
                <Img src={ImgMySQL} /> 
            </ModalFloatingTop>            
                               
            <Text w100>                                        
                <b>MySQL</b> como base de datos relacional.
            </Text>
            <ModalList>
                <ListItem>Diagramas ER y Normalización de tablas</ListItem>
                <ListItem>Consultas</ListItem>
                <ListItem>Procedimientos Almacenados</ListItem>                                                  
            </ModalList>                                 
        </ModalCard>
    )
}

export {MySQL}