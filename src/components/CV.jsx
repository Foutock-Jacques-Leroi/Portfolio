import React from 'react'









function CV() {

    const fileUrl = '/FOUTOCK YMGA Jacques Leroi CV Updated 2.pdf'
    const fileName = 'FOUTOCK YMGA Jacques Leroi CV'


    return (
        <div>
            <a
                className='px-8 py-4 mt-6 font-thin text-white bg-teal-700 border-none rounded-lg'
                href={fileUrl}
                download={fileName}
            > Download <span className='text-xl font-extrabold text-orange-400'>CV</span> </a>
        </div>
    )
}

export default CV