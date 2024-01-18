// FadeTrainers.js
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { fadeTrainers } from '../utils/Transition' 

const FadeTrainers = ({ children, className,index }) => { 
  const ref = useRef(null)
  const isinView = useInView(ref, { once: false })
  const controls = useAnimation() // Utilizado un solo conjunto de controles

  useEffect(() => {
    if (isinView) {
      controls.start("visible")
    }
  }, [isinView, controls])

  return (
    <motion.div
      ref={ref}
      variants={fadeTrainers(index)} // Cambiado el nombre de la función
      initial="hidden"
      animate={controls}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeTrainers
