
import { Grid, Button, Link } from 'controls'
import { Logo, FormContainer } from 'components/App/controls'
import { EmailField, PasswordField } from './Fields'

import { useForm } from 'hooks'

import getActions from './Actions'
import { ObjectHelper } from 'helpers'
import { useRef } from 'react'

const Form = () => {
    const fields = ['email', 'password']
    const form = useForm(ObjectHelper.fillFromArray(fields))    

    const $loaderContainer = useRef()    
    const { loginHandler } = getActions({ form, $loaderContainer})

    const buttonsStyle = { margin: '1em 0' }
    return (
        <FormContainer className='app__login__form' ref={$loaderContainer} onSubmit={loginHandler}>
            <Logo />
            
            <Grid gap='1.5em' w100 maxWidth='23em'>
                <EmailField state={form.email} ref={form.$email} />
                <PasswordField state={form.password} ref={form.$password} />
            </Grid>
            <Grid gap='1em' w100 style={buttonsStyle}>
                <Button submit type='success' w100 maxWidth='10em'>
                    Iniciar Sesión
                </Button>
                <Link href='/app/registro' router>
                    Registrarse
                </Link>
            </Grid>

        </FormContainer>
    )
}

export { Form }