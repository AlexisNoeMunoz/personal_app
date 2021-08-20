
import { Grid, Button, Link, Loader } from 'controls'
import { Logo, ShutDown, FormContainer } from 'components/App/controls'
import { EmailField, PasswordField } from './Fields'
import { Legend } from './Legend'

import { useForm } from 'hooks'

import getActions from './Actions'
import { fillObjectFromArray } from 'helpers'
import { useRef } from 'react'

const Form = () => {
    const fields = ['email', 'password']
    const form = useForm(fillObjectFromArray(fields))    

    const $formContainer = useRef()    
    const { handleLogin } = getActions({ form, fields, $loaderContainer: $formContainer})

    const buttonsStyle = { margin: '1em 0' }
    return (
        <FormContainer className='app__login__form' ref={$formContainer}>
            <Logo />
            <Grid gap='1.5em' w100 maxWidth='23em'>
                <EmailField state={form.email} ref={form.$email} />
                <PasswordField state={form.password} ref={form.$password} />
            </Grid>
            <Grid gap='1em' w100 style={buttonsStyle}>
                <Button type='success' w100 maxWidth='10em' onClick={handleLogin}>
                    Iniciar Sesión
                </Button>
                <Link href='/app/registro' router>
                    Registrarse
                </Link>
            </Grid>
            <ShutDown floating />
            <Legend />            
        </FormContainer>
    )
}

export { Form }