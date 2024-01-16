import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Membership from '@/components/membership/Membership'
import NavBar from '@/components/navbar/NavBar'
import Reseason from '@/components/reseason/Reseason'
import Trainers from '@/components/trainers/Trainers'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full overflow-hidden' >
      <header className='text-white '>
        <NavBar />
        <Hero />
      </header>
      <main className='w-[90%] mx-auto flex flex-col gap-40'>
        <Reseason />
        <Membership />
        <About />
        <Trainers />
        <Footer />
      </main>

    </div>




  )
}
