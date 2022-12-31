import React from 'react'
import Bar from './Bar'
import "./Skills.css"

const Skills = () => {
    return (
        <div className='skills'>
            <div className="bg2"></div>
            <p className='skills-title-1'>Why choose me? 🤔</p>
            <h1 className='skills-title-2'>My Skills 🎖️</h1>
            <div className='skills-list'>
                <div className='skill'>
                    <p>React Js</p>
                    <Bar prof={85}/>
                </div>
                <div className='skill'>
                <p>Node Js</p>
                    <Bar prof={70}/>
                </div>
                <div className='skill'>
                    <p>Javascript</p>
                    <Bar prof={85}/>
                </div>
                <div className='skill'>
                <p>HTML</p>
                    <Bar prof={85}/>
                </div>
                <div className='skill'>
                    <p>CSS</p>
                    <Bar prof={85}/>
                </div>
                <div className='skill'>
                <p>Next Js</p>
                    <Bar prof={65}/>
                </div>
                <div className='skill'>
                    <p>Java</p>
                    <Bar prof={80}/>
                </div>
                <div className='skill'>
                <p>Figma</p>
                    <Bar prof={85}/>
                </div>
            </div>
        </div>
    )
}

export default Skills