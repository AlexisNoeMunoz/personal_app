
import { Text } from 'controls'
import { ModalCard } from '../../../controls'

const maxWidth = '30em'
const Development = () => 
    <ModalCard>                        
        <Text w100 maxWidth={maxWidth}>
            Junto con mi equipo desarrollé desde cero el principal producto de la empresa, una 
            aplicación bastante completa para la industria maquiladora en el sector salud,
            causó un buen impacto en los clientes en cuanto a la administración de el estado
            de salud de sus trabajadores.
        </Text>
        <Text w100 maxWidth={maxWidth}>
            Durante 3 años obtuve reconociemntos individuales y colectivos en la empresa 
            debido a mi desempeño.
        </Text>            
        <Text w100 maxWidth={maxWidth}>
            Utilicé los siguientes lenguajes y frameworks:
        </Text>
    </ModalCard>
   

export { Development }