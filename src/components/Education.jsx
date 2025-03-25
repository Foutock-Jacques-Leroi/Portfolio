import React from 'react'
import { ReactTyped } from 'react-typed'









const Education = () => {
    return (
        <div className="min-w-full h-auto " id="education">
            <div className='p-4 m-5 text-white font-sans'>
                <div className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-white m-6' >
                    <h1 className='text-center m-4 md:text-4xl sm:text-3xl text-2xl font-semibold'>Education</h1>
                </div>
                <div className='flex justify-center gap-4 sm:gap-10 items-center flex-wrap'>
                    <div className='p-2 m-2 border-l-4 rounded-md border-cyan-500 grid justify-between'>
                        <div className='p-2 px-4 ml-[-10px] border-b-4 border-cyan-500 mb-4'>
                            <p className='text-sm font-semibold'>2019-2020</p>
                            <ReactTyped className='font-extrabold text-center md:text-4xl sm:text-3xl text-xl bg-clip-text bg-gradient-to-r from-white to-teal-600 text-transparent' startWhenVisible typeSpeed={40} strings={["GCE Ordinary Level"]}/>
                        </div>
                        <p className='font-thin text-xl text-center'>Great Bilingual HighSchool Douala/Yassa</p>
                        <h1 className='text-center'><span className='font-bold'>Field</span>: SCIENCE</h1>
                        <h1 className='text-center'><span className='font-bold'>Distinction</span>: Top of the School</h1>
                    </div>

                    <div className='p-2 m-2 border-l-4 rounded-md border-cyan-500 grid justify-between'>
                        <div className='p-2 px-4 ml-[-10px] border-b-4 border-cyan-500 mb-4'>
                            <p className='text-sm font-semibold'>2021-2022</p>
                            <ReactTyped className='font-extrabold text-center md:text-4xl sm:text-3xl text-xl bg-clip-text bg-gradient-to-r from-white to-teal-600 text-transparent' startWhenVisible typeSpeed={40} strings={["GCE Advance Level"]} />
                        </div>
                        <p className='font-thin text-xl text-center'>Great Bilingual HighSchool Douala/Yassa</p>
                        <h1 className='text-center'><span className='font-bold'>Field</span>: SCIENCE</h1>
                        <h1 className='text-center'><span className='font-bold'>Distinction</span>: Top of the School</h1>
                    </div>


                    <div className='p-2 m-2 border-l-4 rounded-md border-cyan-500 grid justify-between'>
                        <div className='p-2 px-4 ml-[-10px] border-b-4 border-cyan-500 mb-4'>
                            <p className='text-sm font-semibold'>2023-2024</p>
                            <ReactTyped className='font-extrabold text-center md:text-4xl sm:text-3xl text-xl bg-clip-text bg-gradient-to-r from-white to-teal-600 text-transparent' startWhenVisible typeSpeed={40} strings={["Higher National Diploma(HND)"]} />
                        </div>
                        <p className='font-thin text-xl text-center'>The Pearl Higher Institut</p>
                        <h1 className='text-center'><span className='font-bold'>Speciality</span>: Software Engineering</h1>
                        <h1 className='text-center'><span className='font-bold'>Grade</span>: Upper Credit</h1>
                    </div>
                    <div className='flex w-full justify-center items-center py-2 m-2 '>
                        <marquee direction="left" className='p-4'>
                            <h1 className='font-extrabold text-center md:text-4xl sm:text-3xl text-xl bg-clip-text bg-gradient-to-t from-white to-orange-600 text-transparent'> Bachelor Degree Loading ... </h1>
                        </marquee>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Education