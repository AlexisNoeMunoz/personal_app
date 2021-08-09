

import {Text, Img} from 'controls'
import AchievementBox from "../AchievementBox"

import ImgPHP from 'images/home/skills/php.svg'
import Cluster from '../Cluster'

const PrototiposDGETI = () => {
    return (
        <AchievementBox className='dgeti' title='Consurso Nacional de Prototipos DGETI 2017'>
            <Cluster maxWidth='50em'>
                <Text align='justify'>
                    Obtuve el lugar 20 en el Concurso Nacional de Prototipos de la DGETI en la categoría de software
                    con una aplicación web hecha con <b>PHP</b>, consistía en una bolsa de trabajo para estudiantes
                    donde encontrar el lugar para hacer sus prácticas profesionales en tiempo real.
                </Text>
                <Img src={ImgPHP} maxWidth='8em'/>
            </Cluster>
        </AchievementBox>

    )
}

export default PrototiposDGETI