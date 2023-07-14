import React from 'react'
import SectionTitle from './SectionTitle'
import Skills from './Skills'

const About = () => {
  return (
    <section id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 mt-16'
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="font-bodyFont text-textDark text-[18px] text-justify tracking-wide">
        <p>I am a student pursuing my Bachelor&apos;s degree in <span className="text-textGreen">Computer Engineering</span>. As an aspiring machine learning engineer, I am currently focused on developing my skills in <span className="text-textGreen">machine learning and data science</span>. I am also expanding my knowledge in <span className="text-textGreen">web development</span> technologies such as NextJS13, ReactJS, Tailwind CSS, and MongoDB. Moreover, I possess solid expertise in programming languages like Python, C, C++, and Java. Additionally, I am exploring Python frameworks like Flask and Django to enhance my skill set. With excellent <span className="text-textGreen">problem-solving skills</span> and <span className="text-textGreen">effective communication</span>. I have always considered myself as <span className="text-textGreen">quick learner</span>, eager to learn new technologies. I thrive in collaborative team environments.</p>
      </div>
      <div className="max-w-container flex flex-row mt-10 mb-3 font-titleFont text-textLight text-[22px] font-medium items-center justify-between">
        <span className="hidden md:inline-flex mr-[20px] md:w-60 lgl:w-[375px] h-[1.25px] bg-gray-400 ml-6"></span>
        <span>Technical Skills</span>
        <span className="hidden md:inline-flex md:w-60 lgl:w-[375px] h-[1.25px] bg-gray-400 ml-6"></span>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Skills skillName="Machine Learning"/>
        <Skills skillName="Data analysis"/>
        <Skills skillName="Python"/>
        <Skills skillName="JavaScript"/>
        <Skills skillName="ReactJs"/>
        <Skills skillName="NextJs-13"/>
        <Skills skillName="Java"/>
        <Skills skillName="C++"/>
        <Skills skillName="C"/>
        <Skills skillName="MySQL"/>
        <Skills skillName="Bootstrap"/>
        <Skills skillName="Tailwind CSS"/>
        <Skills skillName="HTML-5"/>
        <Skills skillName="CSS-3"/>
        <Skills skillName="Figma / Canva"/>
      </div>
    </section>
  )
}

export default About