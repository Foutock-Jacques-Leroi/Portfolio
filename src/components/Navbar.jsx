import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AiFillHome, AiFillProject, AiFillContacts, AiOutlineGithub, AiFillGithub, AiFillDashboard } from 'react-icons/ai'








const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [about, setAbout] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleAbout = () => {
        setAbout(!about)
    }
    return (
        <div className='fixed top-0 w-full h-auto text-white bg-sky-900 bg-opacity-55 border-b border-b-white m-0 p-0 mx-auto'>
            <div className='flex justify-between items-center m-4'>
                <h1 className='font-extrabold md:text-5xl sm:text-4xl text-3xl font-sans-serif bg-clip-text bg-gradient-to-l from-slate-400 to-green-400 via-SSQ-400 text-transparent text-orange-300 ml-6'>FYJL.</h1>

                <motion.ul
                    viewport={{ once: true }}
                    initial={{
                        position: 'relative',
                        top: '-60px',

                    }}

                    whileInView={{
                        position: 'relative',
                        top: '0px'
                    }}

                    transition={{
                        duration: 1,
                        ease: 'linear',

                    }}

                    className='hidden md:flex font-bold text-lg [&_li]:cursor-pointer '>

                    <li ><a className='flex gap-1 items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 border-l-green-400 transition-all' href='#home'>Home <AiFillHome size={25} /></a></li>
                    <li ><a className='flex gap-1 items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 transition-all border-l-sky-400' href="#contact"> Contact <AiFillContacts size={25} /></a></li>
                    <li> <a className='flex gap-1 items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 transition-all border-l-orange-400' href="#project"> Projects <AiFillProject size={25} /></a></li>
                    <li onClick={() => { handleAbout() }} className='relative flex gap-1 items-center py-3 mx-6 px-2 hover:border-l-[3px] duration-200 transition-all border-l-white'>About <AiFillDashboard size={25} />
                        <ul className={about ? 'absolute flex flex-col bg-sky-900 bg-opacity-80 text-white top-12 p-2 rounded-xl left-[-3rem] h-auto w-[200%] [&_li]:ml-2 transition-all duration-400' : 'fixed left-[-500px] top-18'} >
                            <li onClick={() => handleAbout()} className='p-1 m-1 border-b-[3px] border-black mx-auto'><a href='#education'>Education</a></li>
                            <li onClick={() => handleAbout()} className='p-1 border-b-[3px] border-black mx-auto'><a href='#workexperience'>Work Experience</a></li>
                            <li onClick={() => handleAbout()} className='p-1 m-2 border-b-[3px] border-black mx-auto'><a href='#aboutme'>Me</a></li>
                        </ul>
                    </li>
                </motion.ul>


                <div onClick={handleNav} className='block md:hidden px-8'>
                    {!nav ? <AiOutlineMenu size={25} className='cursor-pointer' /> : <AiOutlineClose size={25} className='cursor-pointer' />}
                </div>


                <div className={nav ? 'fixed z-index-[100] top-0 left-0 w-[70%] min-h-[100vh] border-r border-r-sky-400 bg-slate-900 duration-500 ' : 'fixed left-[-100%] duration-700'}>

                    <h1 className='font-extrabold py-8 px-10 md:text-4xl sm:text-3xl text-2xl font-sans-serif bg-clip-text bg-gradient-to-l from-slate-400 to-green-400 via-teal-400 text-transparent'>FYJL.</h1>

                    <ul className='font-bold block text-lg px-12  [&_li]:focus:text-sky-500 cursor-pointer'>

                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] rounded-sm  hover:border-l-[3px] duration-200 transition-all border-l-sky-400' href='#home'>Home <AiFillHome size={25} /></a></li>
                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] rounded-sm  hover:border-l-[3px] duration-200 transition-all border-l-sky-400' href='#contact'>Contact <AiFillContacts size={25} /></a></li>
                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] rounded-sm hover:border-l-[3px] duration-200 transition-all border-l-orange-400' href='projects'>Projects <AiFillProject size={25} /></a></li>
                        <li onClick={() => handleAbout()} className='relative flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] rounded-sm hover:border-l-[3px] duration-200 transition-all border-l-white'>About <AiFillDashboard size={25} />
                            <ul className={about ? 'absolute flex flex-col  top-10 p-2 left-0 h-auto w-fit [&_li]:ml-8 transition-all duration-900' : 'fixed left-[-500px] top-18'} >
                                <li onClick={() => { handleAbout(), handleNav() }} className='p-1 m-2 border-b-[3px] border-white mx-auto'><a href='#education'>Education</a></li>
                                <li onClick={() => { handleAbout(), handleNav() }} className='p-1 border-b-[3px] border-white mx-auto'><a href='#workexperience'>Work Experience</a></li>
                                <li onClick={() => { handleAbout(), handleNav() }} className='p-1 m-2 border-b-[3px] border-white mx-auto'><a href='#aboutme'>Me</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar