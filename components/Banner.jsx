import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <section id='home'
            className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10' 
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className='text-[20px] font-titleFont tracking-wide text-textGreen'>Hello, my name is</motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col tracking-widest py-[10px]'
            >
                Yash Dhuliya.
                <span
                    className='text-textDark lgl:mt-4 text-[35px] tracking-widest'
                >
                    Aspiring Data Scientist</span>
            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="max-w-[750px] font-bodyFont tracking-wider text-textDark font-medium text-[18px] text-justify">
                I am a Final year student in Computer Engineering. Excited and learning about Machine learning and Data science. I&apos;m also learning and improving my skills in Web-Development.

                Currently looking for opportunities in Data science or web development as an intern.
            </motion.p>
            <a href="https://github.com/d-yash">
                <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }} 
                className='w-52 h-14 text-[16px] font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
                Check out my Projects
            </motion.button>
            </a>
            
        </section>
    )
}

export default Banner