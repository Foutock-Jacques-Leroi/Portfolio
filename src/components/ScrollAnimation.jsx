import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'






function ScrollAnimation() {
    const { scrollYProgress } = useScroll();

    // const scaleX = useSpring(scrollYProgress);

    const background = useTransform(scrollYProgress,
        [0, 0.2, 0.5, 1],
        ["rgb(255, 255, 255)","rgb(71, 247, 115)", "rgb(250, 153, 73)","rgb(248, 14, 14)"]
    );

    return (
        <div >
            <motion.div className='bottom-0 fixed origin-left bg-red-400 w-full h-2 rounded-full scale-x-left' style={{ scaleX: scrollYProgress, background }} />
        </div>
    )
}

export default ScrollAnimation