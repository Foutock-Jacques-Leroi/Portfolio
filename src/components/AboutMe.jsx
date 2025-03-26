import React from 'react'
import { motion } from 'framer-motion'








function AboutMe() {
    return (
        <div className='w-full min-h-full text-white' id='aboutme'>
            <motion.div
                viewport={{ once: true }}
                initial={{
                    position: 'relative',
                    top: '-200px',
                    opacity: 0,
                    scale: 0.3
                }}

                whileInView={{
                    scale: 1,
                    opacity: 1,
                    position: 'relative',
                    top: '0px'

                }}

                transition={{
                    duration: 1,
                    ease: 'linear',
                    delay: 0.2
                }}

                className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-green-400 m-6'>
                <h1 className='text-center m-4 md:text-4xl sm:text-3xl text-2xl font-semibold'>About Me</h1>
            </motion.div>
            <div className='text-white font-sans py-4 px-6 grid sm:grid-cols-2 grid-cols-1 w-full sm:w-[80%] mx-auto justify-center items-center '>
                <motion.div
                    viewport={{ once: true }}
                    initial={{
                        position: 'relative',
                        left: '-200px'
                    }}

                    whileInView={{
                        position: 'relative',
                        left: '0',

                    }}

                    transition={{
                        duration: 1,
                        ease: 'linear'
                    }}

                    className='m-4 text-center' >
                    <h1 className='md:text-6xl sm:text-5xl text-4xl sp font-extrabold bg-clip-text bg-gradient-to-l from-white to-green-400 text-transparent'>Introducing </h1>
                    <h1 className=' md:text-6xl mb-4 sm:text-5xl text-4xl sp font-extrabold bg-clip-text bg-gradient-to-l from-white to-teal-200 text-transparent'>Myself</h1>
                    <p className='text-wrap px-4 md:text-xl sm:text-xl text-lg '><span>I</span> am a Level 3 Software Engineer at IUT of Douala (Ndogbong) who is in love with comprehensive and open minded ideas on intresting
                        critical thinking and thoughts. Also, my Hobbies are reading and learning new domain along with football because i really love the game.
                    </p>
                </motion.div>
                <center><motion.img
                    viewport={{ once: true }}
                    initial={{
                        position: 'relative',
                        right: '-80px'
                    }}

                    whileInView={{
                        position: 'relative',
                        right: '0px',

                    }}

                    transition={{
                        duration: 1.8,
                        ease: 'backInOut'
                    }}

                    className='rounded-xl shadow-md shadow-teal-300' src="5.jpg" alt="/" height={300} width={300} /></center>
            </div>
            {/* <button popoverTarget='my-popover'>open</button>
            <div popover="auto" id='my-popover'>

            </div> */}
        </div>
    )
}

export default AboutMe
