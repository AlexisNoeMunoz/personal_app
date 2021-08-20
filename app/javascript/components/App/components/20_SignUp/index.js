
import { Grid, Button, Link } from 'controls'
import { AbstractGrid, FormContainer, Logo, ShutDown } from 'components/App/controls'
import { UserField, EmailField, PasswordField, ConfirmPasswordField } from './Fields'
import getActions from './Actions'

import { useRef } from 'react'
import { useForm } from 'hooks'
import { fillObjectFromArray } from 'helpers'

const SignUp = () => {
    const fields = ['user', 'email', 'password', 'confirmPassword']
    const form = useForm(fillObjectFromArray(fields))
    const $formContainer = useRef()
    const { signUpHandle } = getActions({ form, fields, $loaderContainer: $formContainer })
    const buttonsStyle = { marginTop: '1em' }

    return (
        <AbstractGrid className="app__sign_up">
            <FormContainer className='app__sign_up__form' ref={$formContainer}>
                <Logo />
                <Grid gap='1.5em' w100 maxWidth='23em'>
                    <UserField state={form.user} ref={form.$user} />
                    <EmailField state={form.email} ref={form.$email} />
                    <PasswordField state={form.password} ref={form.$password} />
                    <ConfirmPasswordField state={form.confirmPassword} ref={form.$confirmPassword} />
                </Grid>
                <Grid gap='1em' w100 style={buttonsStyle}>
                    <Button type='success' w100 maxWidth='10em' onClick={signUpHandle} >
                        Registrar
                    </Button>
                    <Link href='/app/iniciar_session' router>
                        Iniciar Sesión
                    </Link>
                </Grid>
                <ShutDown floating />
            </FormContainer>
            <ShutDown floating />
        </AbstractGrid>
    )
}

export { SignUp }