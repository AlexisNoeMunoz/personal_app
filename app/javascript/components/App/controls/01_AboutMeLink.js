
import { ButtonClean, Text, Img } from 'controls'
import ImgPhoto from 'images/home/photo.jpg'

const buttonProps = {
    className: 'app__ABOUT_ME_LINK',
    direction: 'column',
    type: 'transparency'
}

const AboutMeLink = () =>     
    <ButtonClean anchor href='/' target='_blank' {...buttonProps} >            
        <Img loading='lazy' src={ImgPhoto}/>
        <Text>Conóceme</Text>
    </ButtonClean>

export { AboutMeLink }