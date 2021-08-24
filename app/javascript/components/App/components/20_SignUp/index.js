
import { Grid, Button, Link } from 'controls'
import { AbstractGrid, FormContainer, Logo, AboutMeLink} from 'components/App/controls'
import { UserField, EmailField, PasswordField, ConfirmPasswordField } from './Fields'
import getActions from './Actions'

import { useRef } from 'react'
import { useForm } from 'hooks'
import { ObjectHelper } from 'helpers'

const SignUp = () => {
    const fields = ['user', 'email', 'password', 'confirmPassword']
    const form = useForm(ObjectHelper.fillFromArray(fields))
    const $loaderContainer = useRef()
    const { signUpHandler } = getActions({ form, $loaderContainer})
    const buttonsStyle = { marginTop: '1em' }

    return (
        <AbstractGrid className="app__sign_up">
            <FormContainer className='app__sign_up__form' ref={$loaderContainer} onSubmit={signUpHandler}>
                <Logo />
                <Grid gap='1.5em' w100 maxWidth='23em'>
                    <UserField state={form.user} ref={form.$user} />
                    <EmailField state={form.email} ref={form.$email} />
                    <PasswordField state={form.password} ref={form.$password} />
                    <ConfirmPasswordField state={form.confirmPassword} ref={form.$confirmPassword} />
                </Grid>
                <Grid gap='1em' w100 style={buttonsStyle}>
                    <Button submit type='success' w100 maxWidth='10em' >
                        Registrar
                    </Button>
                    <Link href='/app/iniciar_session' router>
                        Iniciar Sesión
                    </Link>
                </Grid>                
            </FormContainer> 
            <AboutMeLink />           

        </AbstractGrid>
    )
}

export { SignUp }