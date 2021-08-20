
import { func, object, string } from "prop-types"
import { useWidthStyle, useWidthPropTypes, useTextFieldHandler } from "./hooks"
import { forwardRef } from "react"

import { Grid, Text } from 'controls'

const TextFieldError = ({error}) => 
    <Text className='TEXT_FIELD__DESC' w100>{error}</Text>

const TextField = forwardRef(({
    className = '',
    value = '',
    onChange = () => { },
    desc = 'El campo es inválido',
    containerProps = {},
    ...inputProps }, ref) => {

    const { status, customError, $input } = useTextFieldHandler(ref, value)    

    const { props, style } = useWidthStyle(containerProps)
    className += ' TEXT_FIELD'
    if (status !== '') className += ` TEXT_FIELD--${status}`

    const onChangeHandle = (e) => onChange(e.target.value)
    
    return (
        <Grid gap='0.3em' {...props} {...{ className, style }}>
            <input ref={$input}
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
    inputProps: object,
    ...useWidthPropTypes(),
}

TextField.displayName = 'TextField'
export { TextField }