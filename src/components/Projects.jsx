import React from 'react'










const Projects = () => {
    return (
        <div className='min-w-full h-[230vh] box-border' id="project">
            <div className='text-white w-full h-screen px-2'>
                <div className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-orange-400'>
                    <h1 className='text-center m-4 md:text-4xl sm:text-3xl text-2xl font-semibold' >Projects</h1>
                </div>

                <div className='px-2 mt-6 grid md:grid-cols-2 mx-auto gap-4'>

                    <div className='px-4 w-full h-[50vh] bg-codeImg yo bg-center flex flex-col justify-end gap-6 rounded-lg mx-auto'>
                        <h1 className='md:text-5xl sm:text-4xl text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-orange-600 text-transparent '>E-Commerce Website</h1>
                        {/* className='gap-4 px-6 flex flex-col justify-center mx-auto h-[70vh] w-2/3 bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl' */}
                        <button popoverTarget='my-popover1' className='py-4 rounded-xl border-orange-300 hover:border-orange-400 hover:bg-orange-300 border text-white m-6 transition-all duration-900 text-xl font-semibold'> Details </button>
                        <div popover="auto" id='my-popover1' className='h-[70vh] w-2/3 bg-transparent'>
                            <div className='gap-4 py-4 px-6 flex flex-col justify-center mx-auto b bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl'>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-300 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>What ? </span></i><br /> An E-Commerce web app</h1>
                                <h1 className='text-2xl border-l-[6px] border-purple-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Which Occation ? </span></i><br /> InternShip Defence for HND</h1>
                                <h1 className='text-2xl border-l-[4px] border-emerald-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Why ? </span></i><br /> To solve the problem of instant desire of goods in my locality</h1>
                                <h1 className='text-2xl border-l-[6px] border-pink-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Technologies used?  </span></i><br />MySql, React.Js, Node.js, Express.Js, Bootstrap</h1>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-500 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Completed ?  </span></i><br /> No, At 80% </h1>
                            </div>
                        </div>

                    </div>



                    <div className='px-4 w-full mx-auto h-[50vh] bg-codeImg yo bg-center flex flex-col justify-end gap-6 rounded-lg '>
                        <h1 className='md:text-5xl sm:text-4xl text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-orange-600 text-transparent '>CRUD System </h1>
                        {/* className='gap-4 px-6 flex flex-col justify-center mx-auto h-[70vh] w-2/3 bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl' */}
                        <button popoverTarget='my-popover2' className='py-4 rounded-xl border-orange-300 hover:border-orange-400 hover:bg-orange-300 border text-white m-6 transition-all duration-900 text-xl font-semibold'> Details </button>
                        <div popover="auto" id='my-popover2' className='h-[70vh] w-2/3 bg-transparent'>
                            <div className='gap-4 py-4 px-6 flex flex-col justify-center mx-auto b bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl'>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-300 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>What ? </span></i><br /> A Create, Read, Update, Delete System web app</h1>
                                <h1 className='text-2xl border-l-[6px] border-purple-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Which Occation ? </span></i><br /> None</h1>
                                <h1 className='text-2xl border-l-[4px] border-emerald-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Why ? </span></i><br /> For Fun </h1>
                                <h1 className='text-2xl border-l-[6px] border-pink-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Technologies used?  </span></i><br />MongoDB, React.Js, Node.js, Express.Js, Bootstrap</h1>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-500 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Completed ?  </span></i><br /> YES ! </h1>
                            </div>
                        </div>

                    
                    </div>

                    <div className='px-4 w-full h-[50vh] bg-codeImg yo bg-center flex flex-col justify-end gap-6 rounded-lg mx-auto'>
                        <h1 className='md:text-5xl sm:text-4xl text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-orange-600 text-transparent '>Dynamic Todo app</h1>
                        {/* className='gap-4 px-6 flex flex-col justify-center mx-auto h-[70vh] w-2/3 bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl' */}
                        <button popoverTarget='my-popover3' className='py-4 rounded-xl border-orange-300 hover:border-orange-400 hover:bg-orange-300 border text-white m-6 transition-all duration-900 text-xl font-semibold'> Details </button>
                        <div popover="auto" id='my-popover3' className='h-[70vh] w-2/3 bg-transparent'>
                            <div className='gap-4 py-4 px-6 flex flex-col justify-center mx-auto b bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl'>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-300 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>What ? </span></i><br /> A Dynamic Todo App</h1>
                                <h1 className='text-2xl border-l-[6px] border-purple-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Which Occation ? </span></i><br /> None </h1>
                                <h1 className='text-2xl border-l-[4px] border-emerald-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Why ? </span></i><br /> Improve my Skills in vanilla JavaScript</h1>
                                <h1 className='text-2xl border-l-[6px] border-pink-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Technologies used?  </span></i><br />HTML, CSS, Bootstrap</h1>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-500 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Completed ?  </span></i><br /> YES !</h1>
                            </div>
                        </div>

                    </div>


                    <div className='px-4 w-full mx-auto h-[50vh] bg-codeImg yo bg-center flex flex-col justify-end gap-6 rounded-lg '>
                        <h1 className='md:text-5xl sm:text-4xl text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-orange-600 text-transparent '>Dynamic Timer App</h1>
                        {/* className='gap-4 px-6 flex flex-col justify-center mx-auto h-[70vh] w-2/3 bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl' */}
                        <button popoverTarget='my-popover4' className='py-4 rounded-xl border-orange-300 hover:border-orange-400 hover:bg-orange-300 border text-white m-6 transition-all duration-900 text-xl font-semibold'> Details </button>
                        <div popover="auto" id='my-popover4' className='h-[70vh] w-2/3 bg-transparent'>
                            <div className='gap-4 py-4 px-6 flex flex-col justify-center mx-auto b bg-gradient-to-br from-white to-orange-300 transition-all duration-900 rounded-xl'>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-300 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>What ? </span></i><br /> A Dynamic Timer App</h1>
                                <h1 className='text-2xl border-l-[6px] border-purple-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Which Occation ? </span></i><br /> None </h1>
                                <h1 className='text-2xl border-l-[4px] border-emerald-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Why ? </span></i><br /> Improve my Skills in vanilla JavaScript </h1>
                                <h1 className='text-2xl border-l-[6px] border-pink-500 px-4 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Technologies used?  </span></i><br />HTML, CSS, Bootstrap</h1>
                                <h1 className='text-2xl px-4 border-l-[4px] border-red-500 font-light'><i><span className='font-bold md:text-4xl sm:text-3xl text-2xl'>Completed ?  </span></i><br /> YES ! </h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects