

import {Text, Img, Flex, Grid} from 'controls'
import AchievementBox from "../AchievementBox"
import Cluster from '../Cluster'

import ImgRubyOnRails from 'images/home/skills/ruby_on_rails.svg'
import ImgRuby from 'images/home/skills/ruby.svg'
import ImgMySQL from 'images/home/skills/mysql.svg'
import ImgMongoDB from 'images/home/skills/mongodb.svg'

import ImgHTML from 'images/home/skills/html.svg'
import ImgCSS from 'images/home/skills/css.svg'
import ImgSASS from 'images/home/skills/sass.svg'
import ImgResponsive from 'images/home/skills/responsive_design.svg'

import ImgJS from 'images/home/skills/js.svg'
import ImgReact from 'images/home/skills/react.svg'
import ImgRedux from 'images/home/skills/redux.svg'
import ImgJQuery from 'images/home/skills/jquery.svg'

import ImgJava from 'images/home/skills/java.svg'
import ImgPython from 'images/home/skills/python.svg'

const InteliGene = () => {
    const gap = '0.2em 1em'
    return (
        <AchievementBox className='inteligene' title={<>InteliGene Medical Technologies <br/>(2018-2021)</>}>
                        
            <Text align='center' w100>
                En InteliGene Medical Technologies utilicé los siguientes lenguajes y frameworks: 
            </Text>            
            
            <Grid gap='3em' className='home__achievements__modal__grid'>
                <Cluster>
                    <Text align='justify'w100>                                        
                        <b>Ruby on Rails</b> como backend de aplicaciones web haciendo migraciones, canales, controladores
                        y modelos robustos con sus respectivas validaciones. Validé sesiones de usuarios, maneje cookies
                        seguras y JavaScript Web Tokens, conexiones a bases de datos <b>MySQL</b> y <b>MongoDB</b> y a instancias 
                        de <b>R</b> para el analisis de datos y creación de gráficas.
                    </Text>
                    <Flex wrap alignY='center' gap={gap} >
                        <Img src={ImgRubyOnRails} maxWidth='8em' />
                        <Img src={ImgRuby} maxWidth='5em' />   
                        <Img src={ImgMySQL} maxWidth='7em' />             
                        <Img src={ImgMongoDB} maxWidth='5em' />                
                    </Flex>                        
                </Cluster>
                
                <Cluster>
                    <Text align='justify' w100>
                        <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b> como frontend de aplicaciones web. Hacía 
                        paginas <b>responsivas</b> a cualquier dispositivo con HTML y CSS junto con el 
                        preprocesador <b>SASS</b> y todo utilizando la metodología BEM.
                    </Text>
                    <Flex wrap alignY='center' gap={gap}>
                        <Img src={ImgHTML} maxWidth='4em'/>
                        <Img src={ImgCSS} maxWidth='4em'/>
                        <Img src={ImgSASS} maxWidth='5em'/>
                        <Img src={ImgResponsive} maxWidth='5em'/>
                    </Flex>
                </Cluster>
                
                <Cluster>
                    <Text align='justify' w100>
                        Con <b>JavaScript</b> utilicé <b>React</b>, <b>JQuery</b> y <b>Redux</b> para manipular un DOM virtual y crear 
                        componentes reutilizables y una aplicación rápida e interactiva.
                    </Text>
                    <Flex wrap alignY='center' gap={gap}>
                        <Img src={ImgJS} maxWidth='4em'/>
                        <Img src={ImgReact} maxWidth='4em'/>
                        <Img src={ImgRedux} maxWidth='5em'/>
                        <Img src={ImgJQuery} maxWidth='4em'/>
                    </Flex>
                </Cluster>
                
                <Cluster>
                    <Text align='justify' w100>
                        Además tambien estuve un tiempo trabajando en una aplicación de escritorio con <b>Java</b> y también hice
                        algunos scripts con <b>Python</b> para realizar algunas tareas y haciendo conexiones a las bases de datos 
                        de <b>MySQL</b> y <b>MongoDB</b>.
                    </Text>
                    <Flex wrap alignY='center' gap={gap}>
                        <Img src={ImgJava} maxWidth='5em'/>
                        <Img src={ImgPython} maxWidth='5em'/>                
                    </Flex>
                </Cluster>
            </Grid>
        </AchievementBox>

    )
}

export default InteliGene