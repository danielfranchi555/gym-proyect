'use client'
import React, { useState } from 'react'
import UlDesktop from './UlDesktop'
import UlMobile from './UlMobile'


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        if (!open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'

        }

    }

    return (
        <div className=' absolute z-[2] w-full'>
            <div className=' w-[90%]  mx-auto py-4  md:px-0 md:py-4 flex justify-between items-center'>
                <span className='text-[30px] '>GYM<span className='text-[#FAFF00]'>24</span> </span>
                <span className={`md:hidden text-[26px] z-[20]  ${open ? 'icon-close' : 'icon-menu'}`} onClick={toggle}></span>
                <UlDesktop />
            </div>
            <div className={`md:hidden gap-5 px-5 justify-center items-center h-screen fixed top-0 bottom-0 w-full
             ${open ? 'w-full h-screen flex flex-col fixed bg-black/95  ease-in duration-300  '
                    :
                    'left-[-100%] h-screen absolute top-0 ease-in duration-500 z-10 '} `}>
                {open ? <UlMobile toggle={toggle} /> : ''}
            </div>




        </div>

    )
}

export default NavBar
