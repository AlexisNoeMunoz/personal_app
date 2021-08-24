

import {Text, Img, Flex} from 'controls'
import { AchievementButton, ModalCard } from "../controls"

import ImgBoschCamp from 'images/home/achievements/bosch_camp.png'
import ImgBoschCampPhoto from 'images/home/achievements/bosch_camp_photo.jpg'
import ImgUnity from 'images/home/skills/unity.svg'
import ImgCSharp from 'images/home/skills/csharp.svg'

const BoschCampChallenge = () => {
    const title = 'Innovation BoschCamp Challenge 2019'
    const alt = title
    const ImgHoloLens = 'https://www.muycomputerpro.com/wp-content/uploads/2019/02/HoloLens2.jpg'

    return (
        <AchievementButton className='boschcamp_challenge' img={ImgBoschCamp} title={title} alt={alt}>            
            <ModalCard maxWidth='50em'>
                
                <Text>
                    Participé en el <b>Innovation BoschCamp Challenge en 2019</b>, un concurso entre 5 
                    equipos con una duración de 3 semanas en el cuál desarrollamos una aplicación para
                    los HoloLens de Microsoft.
                </Text>
                <Img src={ImgHoloLens} radius shadow maxWidth='12em'
                    alt='HoloLens de Microsoft'
                /> 

                <Text>
                    La aplicación consistía en una guía para resolver problemas que tenían las estaciones
                    de la maquila de una manera sencilla y cómoda. Gracias a la realidad aumentada 
                    del dispositivo se podía ver claramente la estación y tener la guía a un lado para 
                    resolver las averías. Fue desarrollado en <b>Unity</b> utilizando <b>C#</b>.
                </Text>
                <Flex gap='1em' wrap alignY='center'>
                    <Img src={ImgUnity} maxWidth='6em' alt='Logo Unity' />
                    <Img src={ImgCSharp} maxWidth='6em' alt='Logo C#' />                                                       
                </Flex>  

                <Img src={ImgBoschCampPhoto} maxWidth='28em' radius shadow 
                    alt='Foto del equipo'
                />
            
            </ModalCard>          
        </AchievementButton>

    )
}

export {BoschCampChallenge}