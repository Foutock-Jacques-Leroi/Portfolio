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

                className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] m-6 border-b-green-400'>
                <h1 className='m-4 text-2xl font-semibold text-center md:text-4xl sm:text-3xl'>About Me</h1>
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
                    <h1 className='text-4xl font-extrabold text-transparent md:text-6xl sm:text-5xl sp bg-clip-text bg-gradient-to-l from-white to-green-400'>Introducing </h1>
                    <h1 className='mb-4 text-4xl font-extrabold text-transparent md:text-6xl sm:text-5xl sp bg-clip-text bg-gradient-to-l from-white to-teal-200'>Myself</h1>
                    <p className='px-4 text-lg text-wrap md:text-xl sm:text-lg'><span>I</span> am a Level 3 Software Engineer at IUT of Douala (Ndogbong) who is in love with comprehensive and open minded ideas on intresting
                        critical thinking and thoughts. Also, my Hobbies are reading and learning new domain along with football because i really love the game. Here is my CV 😎 
                    
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

                    className='shadow-md rounded-xl shadow-teal-300' src="5.jpg" alt="/" height={300} width={300} /></center>
            </div>
            {/* <button popoverTarget='my-popover'>open</button>
            <div popover="auto" id='my-popover'>

            </div> */}
        </div>
    )
}

export default AboutMe
