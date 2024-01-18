import Link from 'next/link'
import React from 'react'

const UlMobile = ({toggle}) => {
    return (
        <ul className='flex flex-col  items-center justify-center gap-12'>
            <Link href='#home'       onClick={toggle} className='text-4xl font-bold'>Home</Link>
            <Link href='#membership' onClick={toggle} className='text-4xl font-bold'>Membership</Link>
            <Link href='#about'      onClick={toggle} className='text-4xl font-bold'>About</Link>
            <Link href='#trainers'   onClick={toggle} className='text-4xl font-bold'>Trainers</Link>
        </ul>
    )
}

export default UlMobile
