
import { TextField } from 'controls'
import { forwardRef } from 'react'

const EmailField = forwardRef(({state}, ref) =>
    <TextField type='email'
        placeholder='Correo electrónico'
        desc='El correo no tiene el formato correcto'
        required
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

const PasswordField = forwardRef(({state}, ref) =>
    <TextField type='password'
        placeholder='Contraseña'
        required
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

EmailField.displayName = 'EmailField'
PasswordField.displayName = 'PasswordField'
export { EmailField, PasswordField }