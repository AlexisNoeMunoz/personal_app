

import {Text, Img} from 'controls'
import AchievementBox from "../AchievementBox"

import ImgJava from 'images/home/skills/java.svg'
import Cluster from '../Cluster'

const UltraHackathon = () => {
    return (
        <AchievementBox className='ultra_hackathon' title='Ultra Hackathon Campus Link 2016'>
            <Cluster maxWidth='50em'>
                <Text align='justify'>
                    Participé y gané en el Ultra Hackathon Campus Link en la categoría de salud contra diferentes
                    universidades y preparatorias de Juárez y Chihuahua con un prototipo de una aplicación móvil
                    hecha en <b>Java</b> que se conecta a una pulsera para niños la cuál te indica a que distancia 
                    se encuentra y cuando sale de cierto rango te da una alarma. Todo esto como medida de seguridad 
                    para evitar robos o extravíos.
                </Text>
                <Img src={ImgJava} maxWidth='8em'/>
            </Cluster>
        </AchievementBox>

    )
}

export default UltraHackathon