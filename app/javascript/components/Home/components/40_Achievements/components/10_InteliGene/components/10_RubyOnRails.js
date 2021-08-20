
import { Text, List, ListItem, Img } from 'controls'
import { ModalCard, ModalList, ModalFloatingTop } from '../../../controls'

import ImgRubyOnRails from 'images/home/skills/ruby_on_rails.svg'

const RubyOnRails = () => {
    const indent = '2em'
    const style = {
        paddingTop: '0.6em',
        paddingBottom: '0.6em'
    }
    return (
        <ModalCard>
            <ModalFloatingTop maxWidth='7em' style={style}>
                <Img src={ImgRubyOnRails} />    
            </ModalFloatingTop>

            <Text w100>
                <b>Ruby on Rails</b> para el back-end de aplicaciones web.
            </Text>
            <ModalList>
                <ListItem>Migraciones</ListItem>

                <ListItem>Modelos</ListItem>
                <List indent={indent}>
                    <ListItem>Validaciones robustas</ListItem>
                </List>

                <ListItem>Controladores</ListItem>
                <List indent={indent}>
                    <ListItem>Sesiones de usuarios</ListItem>
                    <ListItem>Cookies</ListItem>
                    <ListItem>JWT</ListItem>
                </List>

                <ListItem>Canales</ListItem>
                <List indent={indent}>
                    <ListItem>Para apps en tiempo real</ListItem>
                </List>
            </ModalList>
        </ModalCard>
    )
}

export { RubyOnRails }