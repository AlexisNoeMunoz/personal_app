
import { Grid } from 'controls'
import { forwardRef } from 'react'

const FormContainer = forwardRef(({children, className = '', ...props}, ref) => {
    className += ' app__FORM_CONTAINER'
    return (
        <Grid className={className} w100 gap='2em' alignY='center' {...props} ref={ref}>
            {children}
        </Grid>
    )
})

FormContainer.displayName = 'FormContainer'
export { FormContainer }