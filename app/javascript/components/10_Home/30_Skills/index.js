
import { forwardRef } from 'react'
import { Grid, Title } from 'controls'
import SkillBox from './SkillBox'

const Skills = (props, ref) => {
    return (
        <Grid className="home__skills" alignContentY='center' w100 gap='4em' ref={ref}>
            <Title className="home__skills__title" align='center'>
                Lenguajes, Frameworks y Librerias
            </Title>
            <Grid className="home__skills__grid"  w100 gap='1.5em' alignContentY='center' alignY='center'>
                <SkillBox className='html'>HTML</SkillBox>
                <SkillBox className='css'>CSS</SkillBox>
                <SkillBox className='sass'>Sass</SkillBox>
                <SkillBox className='responsive_design'>Responsive Design</SkillBox>
                <SkillBox className='js'>JavaScript</SkillBox>
                <SkillBox className='react'>React JS</SkillBox>
                <SkillBox className='redux'>Redux</SkillBox>
                <SkillBox className='jquery'>JQuery</SkillBox>
                <SkillBox className='mysql'>MySQL</SkillBox>
                <SkillBox className='mongodb'>MongoDB</SkillBox>
                <SkillBox className='ruby'>Ruby</SkillBox>
                <SkillBox className='ruby_on_rails'>Ruby on Rails</SkillBox>
                <SkillBox className='python'>Python</SkillBox>
                <SkillBox className='java'>Java</SkillBox>
                <SkillBox className='git'>Git</SkillBox>
                <SkillBox className='docker'>Docker</SkillBox>
            </Grid>
        </Grid>
    )
}

export default forwardRef(Skills)