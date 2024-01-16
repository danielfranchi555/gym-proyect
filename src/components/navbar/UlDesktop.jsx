import Link from 'next/link'
import React from 'react'

const UlDesktop = () => {
    return (
        <>
            <ul className='hidden  md:flex md:gap-20 lg:gap-40  items-center '>
                <Link href='/' className=' text-1xl'>Advantages</Link>
                <Link href='/' className=' text-1xl'>Membership</Link>
                <Link href='/' className=' text-1xl'>About</Link>
                <Link href='/' className=' text-1xl'>Trainers</Link>
            </ul>
        </>
    )
}

export default UlDesktop
