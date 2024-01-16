'use client'


import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { fade } from '../utils/Transition'

const Fade = ({ children, className,key }) => {

    const ref = useRef(null)
    const isinView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isinView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }

    }, [isinView])


    return (
        <>
            <motion.div ref={ref} variants={fade()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                key={key}
                className={className}
            >
                {children}
            </motion.div>

        </>


    )
}

export default Fade
