import React from 'react'

const SectionTitle = ({ title, titleNo }) => {
  return (
    <div>
      <h2 className="font-titleFont text-[25px] font-semibold flex items-center">
        <span className="md:text-lg text-textGreen mr-2">{titleNo}. </span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-[400px] h-[1.25px] bg-gray-400 ml-6"></span>
      </h2>
    </div>

  )
}

export default SectionTitle