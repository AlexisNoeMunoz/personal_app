
import { Form } from 'controls'
import { forwardRef } from 'react'

const formProps = {    
    w100: true,
    gap: '2em',
    alignY: 'center'
}
const FormContainer = forwardRef(({children, className = '', ...props}, ref) => {
    className += ' app__FORM_CONTAINER'
    return (
        <Form className={className} {...formProps} {...props} ref={ref}>
            {children}
        </Form>
    )
})

FormContainer.displayName = 'FormContainer'
export { FormContainer }