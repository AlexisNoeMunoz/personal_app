
import { Text, ListItem } from 'controls'
import { ModalCard, ModalList, ModalFloatingTop, ModalFloatingTopImg } from '../../../controls'

import ImgHTML from 'images/home/skills/html.svg'
import ImgCSS from 'images/home/skills/css.svg'
import ImgSASS from 'images/home/skills/sass.svg'
import ImgResponsive from 'images/home/skills/responsive_design.svg'

const HTML = () => {    
    return (
        <ModalCard>
            <ModalFloatingTop>
                <ModalFloatingTopImg src={ImgHTML} />
                <ModalFloatingTopImg src={ImgCSS} />
                <ModalFloatingTopImg src={ImgSASS} />
                <ModalFloatingTopImg src={ImgResponsive} />
            </ModalFloatingTop>
            
            <Text w100>
                <b>HTML</b>, <b>CSS</b> y <b>SASS</b> para el front-end de aplicaciones web.
            </Text>            
            <ModalList>
                <ListItem>Responsive design</ListItem>
                <ListItem>Metodología BEM</ListItem>
            </ModalList>
        </ModalCard>
    )
}

export { HTML }