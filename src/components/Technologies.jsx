import React from 'react'
import l1 from '../assets/react.svg'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'





const Technologies = () => {
    return (
        <div className='w-full mt-[-28px] text-white '>
            <div
                className='flex flex-col h-auto justify-center items-center py-6 px-4 m-6'>
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

                    }}

                    className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-green-400'>
                    <h1 className='text-center m-4 md:text-4xl sm:text-3xl text-2xl font-semibold' >Technologies</h1>
                </motion.div>
                <div className="m-10 w-full">
                    <motion.div


                        initial={{

                            opacity: 0,
                            scale: 0.1
                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1,


                        }}

                        transition={{
                            duration: 1,
                            ease: 'linear',
                            delay: 1
                        }}
                        viewport={{ once:true }}

                        className='flex flex-wrap justify-around items-center '>
                        <div className='mx-4 w-fit'>
                            <img className='object-fill' src="html5.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="css3.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="javascript.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="git.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <AiFillGithub size={80} />
                        </div>

                        <div className='mx-4  w-fit'>
                            <img className='object-cover' src="mongodb.svg" alt="/" height={100} width={100} />
                        </div>


                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="node.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4  w-fit'>
                            <img className='object-cover' src={l1} alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="bootstrap.svg" alt="/" height={100} width={100} />
                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="tailwindcss.svg" alt="/" height={100} width={100} />

                        </div>

                        <div className='mx-4 w-fit'>
                            <img className='object-cover' src="mysql.svg" alt="/" height={100} width={100} />
                        </div>


                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default Technologies