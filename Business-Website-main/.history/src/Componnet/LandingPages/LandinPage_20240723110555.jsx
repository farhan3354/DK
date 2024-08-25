import React from 'react'
import HeroSection from './HeroSection'
import Project from './Project'
import P from './P'
import Pic from './Pic'
import Team from './Team'
import S from './Detail'
import Vedio from './Vedio'
import Comment from './Comment'


const LandinPage = () => {
    return (
        <div className='bg-white'>
            <HeroSection />
            <P/>
            <Project/>
            <Pic/>
            <Team/>
            <Stock/>
            <Comment/>
            <Vedio/>
            
           
        </div>
    )
}

export default LandinPage