
import { TextField } from 'controls'
import { forwardRef } from 'react'

const UserField = forwardRef(({ state }, ref) =>
    <TextField placeholder='Usuario'
        required
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)

const EmailField = forwardRef(({ state }, ref) =>
    <TextField placeholder='Correo electrónico'
        type='email'
        desc='El correo no tiene el formato correcto'
        required
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)

const PasswordField = forwardRef(({ state }, ref) =>
    <TextField placeholder='Contraseña'
        type='password'
        required
        minLength='6'
        desc='La contraseña debe tener al menos 6 caracteres'
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)

const ConfirmPasswordField = forwardRef(({ state }, ref) =>
    <TextField placeholder='Confirma tu contraseña'
        type='password'
        required
        minLength='6'
        desc='La contraseña debe tener al menos 6 caracteres'
        value={state.value}
        onChange={state.set}
        ref={ref}
    />)


UserField.displayName = 'UserField'
EmailField.displayName = 'EmailField'
PasswordField.displayName = 'PasswordField'
ConfirmPasswordField.displayName = 'ConfirmPasswordField'

export { UserField, EmailField, PasswordField, ConfirmPasswordField }

