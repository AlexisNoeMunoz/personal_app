
import { Grid } from 'controls'

const AbstractGrid = ({children, className='', ...props}) => {    
    className += ' app__ABSTRACT__content'
    
    return (
        <Grid alignContentY='center' className='app__ABSTRACT' >            
            <Grid alignContentY='center' gap='3em' {...props} className={className}>
                {children}
            </Grid>
        </Grid>
    )
}

export { AbstractGrid }