import React from 'react'
import { ReactTyped } from 'react-typed'









const EntryText = () => {

    return (
        <div className='object-cover w-full p-8 px-24 border-none yo bg-codeImg' id="home">
            {/* bg-gradient-to-r from-teal-400 to-sky-800 */}
            <div className='flex flex-col w-full h-[95vh] px-4 py-2 mt-16'>

                <div className='mx-auto overflow-hidden rounded-full'>
                    <img className='object-fill h-auto' src="3.jpg" alt="jacques leroi" height={400} width={400} />
                </div>

                <div className='flex flex-col items-center px-2 text-white py-7'>
                    <h1 className='text-3xl font-semibold text-transparent md:text-5xl sm:text-4xl bg-clip-text bg-gradient-to-r from-white to-white'>FOUTOCK YMGA <br /> JACQUES LE ROI</h1>
                    <ReactTyped className='text-xl font-semibold text-gray-400 md:text-3xl sm:text-2xl' strings={["Full-Stack JavaScript Dev", "Freelancer"]} loop typeSpeed={50} backSpeed={40} />
                </div>

            </div>
        </div>
    )
}

export default EntryText