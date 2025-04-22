import React from 'react'
import { motion } from 'framer-motion'
import Contact from './Contact'








const Letter = () => {
    return (
        <div className='py-6 px-6 mx-6 my-4 font-sans text-white' id='contact'>
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
                <h1 className='text-center m-4 md:text-4xl sm:text-3xl text-2xl font-semibold'>Connect</h1>
            </motion.div>
            <div className='max-w-full grid md:grid-cols-2 gap-8 items-center '>
                <div className='text-center'>
                    <h1 className='font-bold md:text-5xl sm:text-4xl text-3xl '>Any Tips & Questions About My Portfolio ?</h1>
                    <p className='font-semibold md:text-3xl sm:text-2xl text-xl'>I'm Ready To Offer My Services ?<br /> Just Contact Me !</p>
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Letter