import React from 'react'
import { motion } from 'framer-motion'




const WorkExperience = () => {
    return (
        <div className='min-w-full h-auto ' id='workexperience'>
            <div className='flex flex-col p-3 m-4 font-sans text-white'>

                <motion.div
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
                    viewport={{ once: true }}

                    className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-white m-6 w-full ' >

                    <p className='md:text-5xl sm:text-4xl text-3xl sp font-extrabold'>Work</p>
                    <i><h1 className='md:text-5xl sm:text-4xl text-3xl font-bold m-1'>Experience</h1></i>
                </motion.div>

                <div className='grid justify-between sm:grid-cols-2 '>


                    <motion.div

                        initial={{
                            opacity: 0.2,
                            scale: 0.7
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1

                        }}

                        transition={{
                            duration: 0.4,
                            ease: 'backInOut',

                        }}
                        viewport={{ once: true }}

                        className='sm:h-auto my-4 mx-4  shadow-md shadow-white flex items-center justify-center rounded-full bg-gradient-to-l from-white to-green-400 p-20 text-black'>
                        <h1 className='animate-bounce md:text-3xl sm:text-2xl text-xl font-bold text-center'>Monetising TikTok Accounts</h1>
                    </motion.div>


                    <motion.div

                        initial={{
                            opacity: 0.2,
                            scale: 0.7
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1

                        }}

                        transition={{
                            duration: 0.4,
                            ease: 'backInOut',
                            delay: 0.3
                        }}
                        viewport={{ once: true }}

                        className='sm:h-auto my-4 mx-4  shadow-md shadow-white flex items-center justify-center rounded-full bg-gradient-to-l from-white to-teal-400 p-20 text-black'>
                        <h1 className=' animate-bounce md:text-3xl sm:text-2xl text-xl font-bold'>Content Creation</h1>
                    </motion.div>


                    <motion.div

                        initial={{
                            opacity: 0.2,
                            scale: 0.7
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1

                        }}

                        transition={{
                            duration: 0.4,
                            ease: 'backInOut',
                            delay: 0.7
                        }}
                        viewport={{ once: true }}

                        className='sm:h-auto my-4 mx-4  shadow-md shadow-white flex items-center justify-center rounded-full bg-gradient-to-l from-white to-teal-400 p-20 text-black'>
                        <h1 className='animate-bounce md:text-3xl sm:text-2xl text-xl font-bold'>E-Business</h1>
                    </motion.div>


                    <motion.div

                        initial={{
                            opacity: 0.2,
                            scale: 0.7
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1

                        }}

                        transition={{
                            duration: 0.4,
                            ease: 'backInOut',
                            delay: 1.1
                        }}

                        viewport={{ once: true }}

                        className='sm:h-auto my-4 mx-4  shadow-md shadow-white flex items-center justify-center rounded-full bg-gradient-to-l from-white to-slate-400 p-20 text-black'>
                        <h1 className='animate-bounce md:text-3xl sm:text-2xl text-xl font-bold text-center'>Internship At <span className='animate-bounce text-red-400 sp md:text-4xl sm:text-3xl text-2xl font-extrabold'>SKY NETWORK SERVICE</span></h1>
                    </motion.div>


                    <motion.div

                        initial={{
                            opacity: 0.2,
                            scale: 0.7
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}


                        transition={{
                            duration: 0.4,
                            ease: 'backInOut',
                            delay: 1.5
                        }}

                        viewport={{ once: true }}

                        className='sm:h-auto my-4 mx-4  shadow-md shadow-white flex items-center justify-center rounded-full bg-gradient-to-l from-white to-purple-400 p-20 text-black'>
                        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold animate-bounce text-center'>Worker In A Hardware Store</h1>
                    </motion.div>




                </div>
            </div>
        </div>
    )
}

export default WorkExperience