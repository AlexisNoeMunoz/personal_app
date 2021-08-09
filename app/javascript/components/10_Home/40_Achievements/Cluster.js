
import {Grid} from 'controls'

const Cluster = ({children, ...props}) => {
    return (
        <Grid {...props} gap='1em' w100 className='home__achievements__modal__grid__cluster'>            
            {children}
        </Grid>
    )
}

export default Cluster