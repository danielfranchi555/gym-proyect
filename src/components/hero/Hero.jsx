import React from 'react'
import heroImage3 from '../../../public/images/fitness.png'
import heroImage4 from '../../../public/images/fitness-mobile.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import Fade from '../MotionTransition/Fade'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className="text-white w-full h-screen">
      <Fade>
        <Image src={heroImage4} width='auto' height='auto' alt='image' className='md:hidden w-full h-screen object-cover top-0 left-0' />
        <Image src={heroImage3} width='auto' height='auto' alt='image' className=' hidden md:block w-full h-screen object-cover top-0 left-0' />
      </Fade>

      <div className='bg-black/70 absolute top-0 left-0 w-full h-screen'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center '>
        <div className='flex flex-col gap-4 md:left-[10%] m-auto absolute max-w-[1100px] lg:max-w-[800px] p-4'>
          <Fade>
            <p className='text-5xl lg:text-8xl'>Free trial session with a trainer</p>
          </Fade>
          <Fade>
            <Button variant='default' className='button bg-[#FAFF00] max-w-max text-black text-[18px] '>Detailed</Button>
          </Fade>
        </div>
      </div>
    </div>

  )
}

export default Hero
