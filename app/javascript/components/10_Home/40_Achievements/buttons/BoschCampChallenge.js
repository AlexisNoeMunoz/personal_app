

import {Text, Img, Flex} from 'controls'
import AchievementBox from "../AchievementBox"

import ImgUnity from 'images/home/skills/unity.svg'
import ImgCSharp from 'images/home/skills/csharp.svg'
import Cluster from '../Cluster'

const BoschCampChallenge = () => {
    return (
        <AchievementBox className='boschcamp_challenge' title='Innovation BoschCamp Challenge 2019'>
            
            <Cluster maxWidth='50em'>
                <Text align='justify'>
                    Participé en el Innovation BoschCamp Challenge en 2019, un concurso de entre 5 
                    equipos con una duración de 3 semanas en cuál desarrollamos una aplicación para
                    los HoloLens de Microsoft. La aplicación consistía en una guía para resolver
                    de una manera sencilla y cómoda problemas que las estaciones de la maquila 
                    tenían. Gracias a la realidad aumentada del dispositivo se podía ver claramente
                    la estación y tener la guía a un lado para resolver las averías. Fue desarrollado
                    en <b>Unity</b> utilizando <b>C#</b>.
                </Text>
                <Flex gap='1em' wrap alignY='center'>
                    <Img src={ImgUnity} maxWidth='6em'/>
                    <Img src={ImgCSharp} maxWidth='6em'/>
                    <Img src='https://www.muycomputerpro.com/wp-content/uploads/2019/02/HoloLens2.jpg'
                        radius shadow maxWidth='12em' />                
                </Flex>  
            </Cluster>          

        </AchievementBox>

    )
}

export default BoschCampChallenge