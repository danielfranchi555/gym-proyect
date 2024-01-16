import Link from 'next/link'
import React from 'react'

const UlMobile = () => {
    return (
        <ul className='md:hidden px-5 py-3 flex flex-col gap-2 bg-black'>
            <Link href='/'>Advantages</Link>
            <Link href='/'>Membership</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Trainers</Link>
        </ul>
    )
}

export default UlMobile
