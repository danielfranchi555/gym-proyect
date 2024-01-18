import React from 'react'
import imagenAbout from '../../../public/images/photo-about.png'
import Image from 'next/image'
import FadeLeft from '../MotionTransition/FadeLeft'
import FadeRight from '../MotionTransition/FadeRight'
import Fade from '../MotionTransition/Fade'

const about = () => {
    return (
        <div id='about'  className='flex flex-col gap-5 justify-center items-center '>
            <Fade>
                <h4 className='text-3xl text-center md:text-left  w-full md:hidden' >About us</h4>
            </Fade>
            <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
                <div className='flex flex-col items-center gap-5   md:justify-start '>
                    <div className=' w-full'>
                        <Fade>
                            <h5 className='text-start w-full text-4xl font-bold hidden md:block'>About Us</h5>
                        </Fade>
                    </div>
                    <FadeLeft>
                        <div className=' flex flex-col  gap-4 '>
                            <div>
                                <p className='text-center md:text-[15px] lg:text-[18px] md:text-left'>Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. </p>
                            </div>
                            <div className='text-center flex flex-col gap-4 md:gap-4 '>
                                <p className='text-center md:text-[15px] lg:text-[18px] md:text-left'>Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individuals needs and goals. </p>
                                <p className='text-center md:text-[15px] lg:text-[18px] md:text-left'>With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether its building strength, increasing endurance, or losing weight.</p>
                            </div>

                        </div>
                    </FadeLeft>

                </div>

                <div className=' flex  justify-center items-center'>
                    <FadeRight>
                        <Image
                            src={imagenAbout}
                            width='auto'
                            height='auto'
                            alt='imagenAbout'
                            className='w-[500px] md:w-[400px] lg:w-[500px] rounded-lg'
                        />
                    </FadeRight>

                </div>

            </div>

        </div>
    )
}

export default about