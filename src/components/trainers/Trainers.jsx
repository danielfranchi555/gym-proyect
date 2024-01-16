'use client'
import React from 'react'
import { data } from './data'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card } from '../ui/card';

const Trainers = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-10 '>
            <h6 className='text-center font-bold text-3xl lg:text-5xl'>Trainners Staff</h6>
            <Carousel
                opts={{
                    align: "start",
                }}
                className='w-full max-w-xl md:hidden  px-3'>
                <CarouselContent className=' gap-0'>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className=' flex flex-col gap-1 sm:basis-1/2'>
                            <Card className='rounded-xl bg-[#222] '>
                                <div className='px-5 py-5'>
                                    <Image src={item.imagen} width='auto' height='auto' className='w-full' />
                                </div>
                                <div className=' flex justify-center py-4 gap-4'>
                                    <span className='text-[50px] border rounded-full icon-twitter'></span>
                                    <span className='text-[50px] border rounded-full icon-youtube'></span>
                                    <span className='text-[50px] border rounded-full icon-inst'></span>

                                </div>
                            </Card>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className=' flex justify-center items-center gap-5 mt-5'>
                    <CarouselPrevious className='bg-[#FAFF00] text-black' />
                    <CarouselNext className='bg-[#FAFF00] text-black' />
                </div>
            </Carousel>
            <div className='hidden  w-[90%] mx-auto md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-5 '>
                {data.map((item) => (
                    <div className='bg-[#222] justify-center items-center rounded-lg max-w-max hover:bg-[#FAFF00] ease-in duration-300 group cursor-pointer'>
                        <Image src={item.imagen} width='auto' height='auto' className='py-4 px-4 ' />
                        <p className='font-bold text-[15px] text-center group-hover:text-black'>{item.nombre}</p>
                        <div className='flex justify-center gap-3 py-4 rounded-t-sm group cursor-pointer '>
                            <p className='text-[40px]  icon-twitter border rounded-full group-hover:text-black group-hover:border-black  '></p>
                            <p className='text-[40px]  icon-youtube border rounded-full group-hover:text-black group-hover:border-black'></p>
                            <p className='text-[40px]  icon-inst border rounded-full group-hover:text-black group-hover:border-black'></p>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Trainers
