import React from 'react'
import Fade from '../MotionTransition/Fade'
import FadeLeft from '../MotionTransition/FadeLeft'
import FadeRight from '../MotionTransition/FadeRight'


const Reseason = () => {
    return (
        <div className=' flex flex-col gap-20  mt-[100px] w-ful '>
            <Fade>
                <h2 className='text-4xl font-medium text-center md:text-start lg:text-5xl'>Reasons join</h2>
            </Fade>
            <div className=' flex flex-col justify-center  items-center gap-4 md:grid md:grid-cols-2'>
                <FadeLeft>
                    <div className='flex px-0  gap-5 w-[100%] md:w-[100%] md:h-[100px] lg:w-[100%] lg:h-[100px]'>
                        <div className=' w-[100px] flex justify-center items-center'>
                            <span className='icon-icon_line text-[60px] '></span>
                        </div>
                        <div className='w-[100%] flex flex-col gap-1 '>
                            <span className='text-[18px] font-bold'>15000 sq.m.</span>
                            <p className='text-[14px]  '>A spacious gym for sports a safe distance between exercise machines</p>
                        </div>
                    </div>
                </FadeLeft>
                <FadeRight>
                    <div className='flex px-0  gap-5 w-[100%] md:w-[100%] md:h-[100px] lg:w-[100%] lg:h-[100px]'>
                        <div className=' w-[100px] flex justify-center items-center'>
                            <span className='icon-icon_-eqipment text-[60px] '></span>
                        </div>
                        <div className='w-[100%] flex flex-col gap-1 '>
                            <span className='text-[18px] font-bold'>More than 200 equipment</span>
                            <p className='text-[14px] '>No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.</p>
                        </div>
                    </div>
                </FadeRight>
                <FadeLeft>
                    <div className='flex px-0  gap-5 w-[100%] md:w-[100%] md:h-[100px] lg:w-[100%] lg:h-[100px]'>
                        <div className=' w-[100px] flex justify-center items-center'>
                            <span className='icon-icon_-fitness-zones text-[60px] '></span>
                        </div>
                        <div className='w-[100%] flex flex-col gap-1 '>
                            <span className='text-[18px] font-bold'>4 fitness zones</span>
                            <p className='text-[14px] '>From cardio to functional and cycle. Separate area for boxing and mixed martial arts</p>
                        </div>
                    </div>
                </FadeLeft>
                <FadeRight>
                    <div className='flex px-0  gap-5 w-[100%] md:w-[100%] md:h-[100px] lg:w-[100%] lg:h-[100px]'>
                        <div className=' w-[100px] flex justify-center items-center'>
                            <span className='icon-icon_time text-[60px] '></span>
                        </div>
                        <div className='w-[100%] flex flex-col gap-1 '>
                            <span className='text-[18px] font-bold'>Round-the-clock operation</span>
                            <p className='text-[14px] '>The gym is open 24 hours a day, also works on all holidays and weekends</p>
                        </div>
                    </div>
                </FadeRight>
            </div>
        </div>

    )
}

export default Reseason
