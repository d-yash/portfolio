import React, { useState } from 'react';
import { logo } from "@/public/assets"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { RxTwitterLogo } from 'react-icons/rx';

function Navbar() {
  const ref = useRef("")
  const handleClick = (e) =>{
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
      link.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <Image src={logo} className='w-18 h-14' />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-9'>
          <ul className='flex text-[18px] gap-9' >
            <Link href="#home" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}>Home</motion.li>
            </Link>
            <Link href="#about" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}>About</motion.li>
            </Link>
            <Link href="#experience" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}>Experience</motion.li>
            </Link>
            <Link href="#projects" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.7 }}>Project</motion.li>
            </Link>
            <Link href="#contact" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.9 }}>Contact</motion.li>
            </Link>
            <a href="https://drive.google.com/file/d/17AocQ7qj84xX3DmsgaaWSRBFafX8Dwj9/view?usp=sharing">
              <motion.button initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 1.1 }} className='flex items-center border-2 p-1 rounded-lg px-2 border-textGreen text-textGreen  hover:border-textLight duration-300 hover:bg-textDark font-semibold tracking-widest text-[18px]'>Resume</motion.button>
            </a>
          </ul>
        </div>
        <div onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-0 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
        {
          showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center justify-center px-4 py-10 relative'
              >
                <MdOutlineClose onClick={() => setShowMenu(false)}
                  className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
                />
                <div >
                  <ul className='flex flex-col text-[18px] gap-9 items-center align-middle' >
                    <Link href="#home" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}>Home</motion.li>
                    </Link>
                    <Link href="#about" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.3 }}>About</motion.li>
                    </Link>
                    <Link href="#experience" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.5 }}>Experience</motion.li>
                    </Link>
                    <Link href="#projects" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.7 }}>Project</motion.li>
                    </Link>
                    <Link href="#contact" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.9 }}>Contact</motion.li>
                    </Link>
                    <a href="https://drive.google.com/file/d/17AocQ7qj84xX3DmsgaaWSRBFafX8Dwj9/view?usp=sharing">
                      <motion.button initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 1.1 }} className='flex items-center border-2 p-1 rounded-lg px-2 border-textGreen text-textGreen  hover:border-textLight duration-300 hover:bg-textDark font-semibold tracking-widest text-[18px]'>Resume</motion.button>
                    </a>
                  </ul>
                  <div className='flex flex-row gap-8 justify-center items-center mt-10'>
                    <motion.a initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 1.0 }} href="https://github.com/d-yash" target='_blank'><span className='w-10 h-10 text-[30px] bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><AiOutlineGithub /></span></motion.a>
                    <motion.a initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.8 }} href="https://www.linkedin.com/in/yash-dhuliya-37667920b/" target='_blank'><span className='w-10 h-10 text-[22px] bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><ImLinkedin2 /></span></motion.a>
                    <motion.a initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }} href="https://twitter.com/DhuliyaYash?t=FaqUzt2IRn2xM0ohZIUGIQ&s=09" target='_blank'><span className='w-10 h-10 text-[28px] bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><RxTwitterLogo /></span></motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>

  )
}

export default Navbar;