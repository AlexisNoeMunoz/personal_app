
import { AbstractGrid, AboutMeLink } from 'components/App/controls'
import { Form } from './Form'

const Login = () => {
    return (
        <AbstractGrid className='app__login'>
            <Form />
            <AboutMeLink />
        </AbstractGrid>
    )
}

export { Login }