

import {Text, Img} from 'controls'
import { AchievementButton, ModalCard } from "../controls"

import ImgPrototiposDGETI from 'images/home/achievements/concurso_dgeti.png'
import ImgPrototiposDGETIPhoto from 'images/home/achievements/dgeti_photo.jpg'
import ImgPHP from 'images/home/skills/php.svg'

const PrototiposDGETI = () => {
    const title = 'Consurso Nacional de Prototipos DGETI 2017'
    const alt = title

    return (
        <AchievementButton className='dgeti' img={ImgPrototiposDGETI} title={title} alt={alt}>
            <ModalCard maxWidth='50em'>

                <Text>
                    Obtuve el lugar 20 en el <b>Concurso Nacional de Prototipos de la DGETI</b> en la 
                    categoría de software con una aplicación web hecha con <b>PHP</b>.
                </Text>
                <Img src={ImgPHP} maxWidth='8em' alt='Logo PHP' />

                <Text>
                    Consistía en una bolsa de trabajo para estudiantes para encontrar donde 
                    hacer sus prácticas profesionales en tiempo real.
                </Text>
                <Img src={ImgPrototiposDGETIPhoto} maxWidth='20em' radius shadow 
                    alt='Foto del concurso'
                />
                
            </ModalCard>
        </AchievementButton>

    )
}

export {PrototiposDGETI}