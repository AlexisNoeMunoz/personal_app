
import { func } from 'prop-types'
import { Grid } from 'controls'
import { forwardRef } from 'react'

const Form = forwardRef(({ children, onSubmit = () => { }, ...props }, ref) => {
    const onSubmitHandler = (event) => {
        event.preventDefault()
        onSubmit(event)
        return false
    }
    return (
        <Grid {...props} onSubmit={onSubmitHandler} tag='form' noValidate ref={ref}>
            {children}
        </Grid>
    )
})

Form.propTypes = {
    onSubmit: func
}

Form.displayName = 'Form'
export { Form }