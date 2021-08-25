
import { ButtonClean, Icon } from 'controls'

const ContactLink = ({ icon, ...props }) => {
    return (
        <ButtonClean anchor target='_blank' className='home__contact__button' {...props}>
            <Icon icon={icon} type='light' />
        </ButtonClean>
    )
}

const LinkedinLink = () => 
    <ContactLink icon='linkedin' href='https://www.linkedin.com/in/alexis-noe-munoz/' />

const GitHubLink = () => 
    <ContactLink icon='github' href='https://github.com/AlexisNoeMunoz' />   

export { ContactLink, LinkedinLink, GitHubLink }