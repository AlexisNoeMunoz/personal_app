
import { ShutDown, AbstractGrid } from 'components/App/controls'
import { Legend } from './Legend'
import { Form } from './Form'

const Login = () => {
    return (
        <AbstractGrid className='app__login'>        
            <Form />
            <ShutDown floating/>
            <Legend />
        </AbstractGrid>
    )
}

export { Login }