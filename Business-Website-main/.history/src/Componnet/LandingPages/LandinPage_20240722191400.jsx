import React from 'react'
import HeroSection from './HeroSection'
import Project from './Project'
import P from './P'
import Pic from './Pic'
import Team from './Team'
import Detail from './Detail'


const LandinPage = () => {
    return (
        <div className='bg-wgite'>
            <HeroSection />
            <P/>
            <Project/>
            <Pic/>
            <Team/>
            <Detail/>
           
        </div>
    )
}

export default LandinPage