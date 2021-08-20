
import { TextField } from 'controls'
import { forwardRef } from 'react'

const EmailField = forwardRef(({state}, ref) =>
    <TextField type='email'
        placeholder='Correo electrónico'
        desc='El correo no tiene el formato correcto'
        required
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)

const PasswordField = forwardRef(({state}, ref) =>
    <TextField type='password'
        placeholder='Contraseña'
        required
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)

EmailField.displayName = 'EmailField'
PasswordField.displayName = 'PasswordField'
export { EmailField, PasswordField }