'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import UlDesktop from './UlDesktop'
import UlMobile from './UlMobile'
import Image from 'next/image'
import heroImage from '../../../public/images/valen.jpg'
import Hero from '../hero/Hero'

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        console.log(open)
    }

    return (
        <div className=' absolute z-[2] w-full'>
            <div className=' w-[90%]  mx-auto py-4 px-5 md:px-0 md:py-4 flex justify-between items-center'>
                <span className='text-[30px] '>GYM<span className='text-[#FAFF00]'>24</span> </span>
                <span className='md:hidden icon-menu text-[26px] ' onClick={toggle}></span>
                <UlDesktop />
            </div>
            {open ? <UlMobile /> : ''}


        </div>

    )
}

export default NavBar
