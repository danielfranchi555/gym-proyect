import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-row justify-between items-center w-[100%] mx-auto py-5 border-t-2 '>
            <div className='h-[80px] flex flex-col justify-around max-w-[150px] md:flex md:flex-col md:gap-1 md:max-w-[240px] '>
                <span className='font-bold'>GYM<span className='text-[#FAFF00]'>24</span></span>
                <p className='text-[8px]'>Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
            </div>
            <div className='hidden md:block'>
                <p className='text-[10px]'>Developed By Daniel Franchi</p>
            </div>
            <div className='h-[80px] flex flex-col justify-around items-start '>
                <p className=' font-bold'>Contact</p>
                <div className='flex items-center'>
                    <span className='icon-icon_call'></span>
                    <p className='text-[10px]'>+375(44)-777-24-12</p>
                </div>
                <div className='flex items-center'>
                    <span className='icon-icon_email'></span>
                    <p  className='text-[10px]' >+375(44)-777-24-12</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
