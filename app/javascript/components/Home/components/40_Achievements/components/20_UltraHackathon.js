

import {Text, Img} from 'controls'
import { AchievementButton, ModalCard } from "../controls"

import ImgUltraHackathon from 'images/home/achievements/ultra_hackathon.png'
import ImgUltraHackathonPhoto from 'images/home/achievements/ultra_hackathon_photo.jpg'
import ImgJava from 'images/home/skills/java.svg'

const UltraHackathon = () => {
    const title = 'Ultra Hackathon Campus Link 2016'
    const alt = title

    return (
        <AchievementButton className='ultra_hackathon' img={ImgUltraHackathon} title={title} alt={alt}>
            <ModalCard maxWidth='50em'>
                
                <Text >
                    Gané en el <b>Ultra Hackathon Campus Link</b> en la categoría de salud contra diferentes
                    universidades y preparatorias de Ciudad Juárez y Chihuahua.
                </Text>
                <Img src={ImgUltraHackathonPhoto} maxWidth='25em' radius shadow 
                    alt={'Foto de la entrega del premio del concurso'} 
                />

                <Text>
                    El prototipo consistía en una aplicación móvil hecha en <b>Java</b>, la cual 
                    se conectaba a una pulsera para niños que te indicaba a que distancia se 
                    encontraba y cuando sale de cierto rango suena una alarma. Todo esto como
                    medida de seguridad para evitar robos o extravíos.
                </Text>
                <Img src={ImgJava} maxWidth='8em' alt='Logo Java'/> 
                             
            </ModalCard>
        </AchievementButton>

    )
}

export {UltraHackathon}