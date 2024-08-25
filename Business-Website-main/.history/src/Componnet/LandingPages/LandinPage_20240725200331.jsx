import React from 'react'
import HeroSection from './HeroSection'
import Project from './Project'
// import P from './P'
import Pic from './Pic'
import Team from './Team'
import Stock from './Stock'
import Vedio from './Vedio'
import Comment from './Comment'


const LandinPage = () => {
    return (
        <div className=''>
            <div className='absolute'>    <HeroSection /></div>
            <div className="bg-white">
                <div className="flex justify-center items-start relative top-80"> {/* Adjusted to align the content to the top */}
                    <img
                        className="pl-50"
                        src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png"
                        alt="Project Image"
                    />
                </div>
            </div>
            {/*         <P/>   */}
            <Project />
            <Pic />
            <Team />
            <Stock />
            <Comment />
            <Vedio />


        </div>
    )
}

export default LandinPage