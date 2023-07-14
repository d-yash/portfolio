import React from 'react'

const Skills = ({ skillName }) => {
    return (
        <div>
            <a href="">
                <p className="border-2 border-textDark px-4 mx-1.5 py-2 rounded-lg text-[16px] tracking-wider text-textDark hover:text-textGreen hover:border-textGreen duration-300 hover:-translate-y-2 transition-all">{skillName}</p>
            </a>
        </div>
    )
}

export default Skills