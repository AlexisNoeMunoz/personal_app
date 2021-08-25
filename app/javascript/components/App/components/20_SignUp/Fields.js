
import { TextField, CheckBox, Label, Link } from 'controls'
import { forwardRef } from 'react'

const UserField = forwardRef(({ state }, ref) =>
    <TextField 
        placeholder='Usuario'
        required
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

const EmailField = forwardRef(({ state }, ref) =>
    <TextField 
        placeholder='Correo electrónico'
        type='email'
        desc='El correo no tiene el formato correcto'
        required
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

const PasswordField = forwardRef(({ state }, ref) =>
    <TextField 
        placeholder='Contraseña'
        type='password'
        required
        minLength='6'
        desc='La contraseña debe tener al menos 6 caracteres'
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

const ConfirmPasswordField = forwardRef(({ state }, ref) =>
    <TextField 
        placeholder='Confirma tu contraseña'
        type='password'
        required
        minLength='6'
        desc='La contraseña debe tener al menos 6 caracteres'
        value={state[0]}
        onChange={state[1]}
        ref={ref}
    />)

const AcceptPrivacyNotice = forwardRef(({ state }, ref) =>    
    <Label className='app__sign_up__form__accept_privacy_notice'>
        <CheckBox
            value={state[0]}
            onChange={state[1]}
            required
            ref={ref}
        />
        <span>
            He leído y estoy de acuerdo con el&nbsp;
            <Link href='/app/aviso_privacidad' target="_blank">
                Aviso de Privacidad
            </Link>
        </span>
    </Label>)


UserField.displayName = 'UserField'
EmailField.displayName = 'EmailField'
PasswordField.displayName = 'PasswordField'
ConfirmPasswordField.displayName = 'ConfirmPasswordField'
AcceptPrivacyNotice.displayName = 'AcceptPrivacyNotice'

export { UserField, EmailField, PasswordField, ConfirmPasswordField, AcceptPrivacyNotice }

