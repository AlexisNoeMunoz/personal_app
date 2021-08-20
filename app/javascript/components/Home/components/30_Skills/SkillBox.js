
import { Grid, Text } from 'controls'
import { string } from 'prop-types'

const SkillBox = ({ children, className }) => {
    return (
        <Grid className="home__skills__box" w100 gap='0.5em'>
            <div className={`home__skills__box__img home__skills__box__img--${className}`} />
            <Text className="home__skills__box__name" light align='center'>
                {children}
            </Text>
        </Grid>
    )
}

SkillBox.propTypes = {
    className: string
}

export default SkillBox