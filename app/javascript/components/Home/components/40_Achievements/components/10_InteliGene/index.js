

import {Text, Grid } from 'controls'
import { AchievementButton } from "../../controls"

import ImgInteliGene from 'images/home/achievements/inteligene.svg'

import { Development, RubyOnRails, MySQL, MongoDB, HTML, JavaScript, Python } from './components'

const InteliGene = () => {    
    const title = <>InteliGene Medical Technologies <br/>(2018-2021)</>
    const alt = 'InteliGene Medical Technologies'

    return (
        <AchievementButton className='inteligene' title={title} img={ImgInteliGene} alt={alt}>
            <Development />                  
            <Grid gap='2em 1.5em' className='home__achievements__modal__grid'>                
                <MySQL />    
                <MongoDB />        
                <HTML />                                                    
                <JavaScript />   
                <RubyOnRails />
                <Python />                                            
            </Grid>
            
        </AchievementButton>

    )
}

export {InteliGene}