
import { Grid, Text } from 'controls'

const TextBold = ({ children }) => <Text><b>{children}</b></Text>
const Container = ({ children }) => 
    <Grid w100 alignX='start' className='app__privacy_notice__container'>
        {children}
    </Grid>

export { Container, TextBold }