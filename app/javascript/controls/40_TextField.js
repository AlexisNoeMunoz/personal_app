
import { bool, func, object, string } from "prop-types"
import { useWidthStyle, useWidthPropTypes, useTextFieldHandler } from "./hooks"
import { forwardRef } from "react"

import { Grid, Text } from 'controls'

const renderTextArea = forwardRef((props, ref) => <textarea {...props} ref={ref} />)
const renderInput = forwardRef((props, ref) => <input {...props} ref={ref} />)

const TextFieldError = ({error}) => 
    <Text className='TEXT_FIELD__DESC' w100>{error}</Text>

const TextField = forwardRef(({
    className = '',
    value = '',
    onChange = () => { },
    desc = 'El campo es inválido',
    containerProps = {},
    w100 = false,    
    maxWidth = '',
    textarea = false,
    ...inputProps }, ref) => {
    
    const { status, customError, $input } = useTextFieldHandler(ref, value)    

    const { props, style } = useWidthStyle({...containerProps, w100, maxWidth})
    className += ' TEXT_FIELD'
    if (status !== '') className += ` TEXT_FIELD--${status}`

    const onChangeHandle = (e) => onChange(e.target.value)
    
    const Element = textarea ? renderTextArea : renderInput
    return (
        <Grid gap='0.3em' {...props} {...{ className, style }}>
            <Element ref={$input}
                {...inputProps}
                value={value}
                onChange={onChangeHandle}
                className=' TEXT_FIELD__INPUT'
            />
            {(status === 'INVALID') && <TextFieldError error={desc} /> }
            {(status === 'INVALID_CUSTOM_ERROR') && <TextFieldError error={customError} /> }
        </Grid>
    )
})

TextField.propTypes = {
    className: string,
    value: string,
    onChange: func,
    desc: string,
    containerProps: object,
    textarea: bool,    
    ...useWidthPropTypes(),
}

TextField.displayName = 'TextField'
export { TextField }