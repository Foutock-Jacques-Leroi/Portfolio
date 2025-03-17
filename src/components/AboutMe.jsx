import React from 'react'









function AboutMe() {
    return (
        <div className='w-full min-h-full'>
            <div className='text-white font-sans py-4 px-6 grid sm:grid-cols-2 grid-cols-1 w-full sm:w-[80%] mx-auto justify-center items-center '>
                <div className='m-4 text-center'>
                    <h1 className='md:text-6xl sm:text-5xl text-4xl sp font-extrabold bg-clip-text bg-gradient-to-l from-white to-green-400 text-transparent'>Introducing </h1>
                    <h1 className=' md:text-6xl mb-4 sm:text-5xl text-4xl sp font-extrabold bg-clip-text bg-gradient-to-l from-white to-teal-200 text-transparent'>Myself</h1>
                    <p className='text-wrap px-4 md:text-xl sm:text-xl text-lg '><span>I</span> am a smart working guy who is in love with comprehensive and open minded ideas on intresting
                        critical thinking and thoughts. Also my hobby is reading or learning new domain, with that i play football in parallel.
                    </p>
                </div>
                <center><img className='rounded-xl shadow-md shadow-teal-300' src="6.jpg" alt="/" height={300} width={300}/></center>
            </div> 
        </div>
    )
}

export default AboutMe