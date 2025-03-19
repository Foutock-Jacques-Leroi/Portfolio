import React from 'react'
import { ReactTyped } from 'react-typed'









const EntryText = () => {

    return (
        <div className='p-8 px-24 w-full object-cover yo border-none bg-codeImg' id="home">
            {/* bg-gradient-to-r from-teal-400 to-sky-800 */}
            <div className='flex flex-col w-full h-[95vh] px-4 py-2 mt-16'>

                <div className='overflow-hidden mx-auto rounded-full'>
                    <img className='h-auto object-fill' src="3.jpg" alt="jacques leroi" height={400} width={400} />
                </div>

                <div className='flex items-center flex-col py-7 px-2 text-white'>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-white to-white'>FOUTOCK YMGA <br /> JACQUES LE ROI</h1>
                    <ReactTyped className='md:text-3xl sm:text-2xl text-xl font-semibold text-gray-400' strings={["Full-Stack JavaScript Dev", "Freelancer"]} loop typeSpeed={50} backSpeed={40} />
                </div>

            </div>
        </div>
    )
}

export default EntryText