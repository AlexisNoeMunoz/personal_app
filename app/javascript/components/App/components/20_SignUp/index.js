
import { Grid, Button, Link } from 'controls'
import { AbstractGrid, FormContainer, Logo, AboutMeLink} from 'components/App/controls'
import { UserField, EmailField, PasswordField, ConfirmPasswordField, AcceptPrivacyNotice } from './Fields'
import getActions from './Actions'

import { useRef } from 'react'
import { useForm, useBoolState } from 'hooks'
import { ObjectHelper } from 'helpers'

const SignUp = () => {
    
    const fields = ['name', 'email', 'password', 'confirmPassword']
    const formConfig = ObjectHelper.fillFromArray(fields,)
    formConfig.acceptPrivacyNotice = [false, useBoolState]    
    const form = useForm(formConfig)    

    const $loaderContainer = useRef()
    const { signUpHandler } = getActions({ form, $loaderContainer})
    const buttonsStyle = { marginTop: '1em' }

    return (
        <AbstractGrid className="app__sign_up">
            <FormContainer className='app__sign_up__form' ref={$loaderContainer} onSubmit={signUpHandler}>
                <Logo />
                <Grid gap='1.5em' w100 maxWidth='23em'>
                    <UserField state={form.name} ref={form.$name} />
                    <EmailField state={form.email} ref={form.$email} />
                    <PasswordField state={form.password} ref={form.$password} />
                    <ConfirmPasswordField state={form.confirmPassword} ref={form.$confirmPassword} />
                    <AcceptPrivacyNotice state={form.acceptPrivacyNotice} ref={form.$acceptPrivacyNotice} />
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