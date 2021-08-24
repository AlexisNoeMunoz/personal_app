
import { Text, ListItem } from 'controls'
import { ModalCard, ModalList, ModalFloatingTop, ModalFloatingTopImg } from '../../../controls'

import ImgJS from 'images/home/skills/js.svg'
import ImgReact from 'images/home/skills/react.svg'
import ImgRedux from 'images/home/skills/redux.svg'
import ImgJQuery from 'images/home/skills/jquery.svg'

const JavaScript = () => {        
    return (
        <ModalCard>
            <ModalFloatingTop>
                <ModalFloatingTopImg src={ImgJS} />
                <ModalFloatingTopImg src={ImgReact} />
                <ModalFloatingTopImg src={ImgRedux} />
                <ModalFloatingTopImg src={ImgJQuery} />
            </ModalFloatingTop>

            <Text w100>
                <b>JavaScript</b> con <b>React</b>, <b>JQuery</b> y <b>Redux</b> para el 
                front-end de aplicaciones interactivas.
            </Text>  
            <ModalList>
                <ListItem>Componentes reutilizables</ListItem>
                <ListItem>React Router</ListItem>
                <ListItem>Redux Thunk</ListItem>
            </ModalList>          
        </ModalCard>
    )
}

export { JavaScript }