
import { ListItem, Text, Img } from 'controls'
import { ModalCard, ModalList, ModalFloatingTop } from '../../../controls'

import ImgMongoDB from 'images/home/skills/mongodb.svg'

const MongoDB = () => {
    return (
        <ModalCard>
            <ModalFloatingTop maxWidth='5em'>
                <Img src={ImgMongoDB} />
            </ModalFloatingTop>            

            <Text w100>                                        
                <b>MongoDB</b> como base de datos no relacional.
            </Text>
            <ModalList>
                <ListItem>Operaciones de agregación</ListItem>
                <ListItem>Triggers</ListItem>                                                                
            </ModalList>           
        </ModalCard>
    )
}

export { MongoDB }