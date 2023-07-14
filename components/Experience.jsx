import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Cognizant from './works/Cognizant.jsx'
import Sunray from './works/Sunray.jsx'

const Experience = () => {
  const [workCognizant, setWorkCognizant] = useState(true);
  const [workSunray, setWorkSunray] = useState(false);

  const handleCognizant = () => {
    setWorkCognizant(true);
    setWorkSunray(false);
  };

  const handleSunray = () => {
    setWorkSunray(true);
    setWorkCognizant(false);
  };

  return (
    <section id="experience" className="max-w-containerSmall mx-auto lgl:py-24 py-10">
        <SectionTitle title="Experience" titleNo="02"/>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-80 flex flex-col">
                <li onClick={handleCognizant} className={` ${workCognizant ? "border-l-textGreen" : "border-l-hoverColor"} border-l-2  text-textDark hover:bg-[#112240] py-3 text-lg cursor-pointer duration-300 pl-4 pr-8`}>Cognizant</li>
                <li onClick={handleSunray} className={`${workSunray ? "border-l-textGreen" : "border-l-hoverColor"} border-l-2  text-textDark hover:bg-[#112240] py-3 text-lg cursor-pointer duration-300 pl-4 pr-8`}>Sunray Datalinks</li>
            </ul>
        <div>
            {workCognizant && <Cognizant />}
            {workSunray && <Sunray />}
        </div>
        </div>
    </section>
  )
}

export default Experience;