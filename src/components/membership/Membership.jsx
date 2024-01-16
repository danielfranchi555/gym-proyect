'use client'
import React from 'react'
import { data } from './data';
import Link from 'next/link';
import FadeUp from '../MotionTransition/FadeUp'
import Fade from '../MotionTransition/Fade';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Membership = () => {

    return (
        <div className='flex justify-center  '>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-xl md:hidden"
            >
                <CarouselContent className='rounded-xl'>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className='rounded-xl sm:basis-1/2'>
                            <Card className=' bg-[#222] rounded-lg border-[#FAFF00]'>
                                <div className=' bg-[#FAFF00] text-black flex flex-col rounded-t-lg justify-center items-center py-3 gap-1 '>
                                    <p className='text-2xl font-bold'>{item.title}</p>
                                    <p className='text-2xl font-bold'>{item.price}</p>
                                </div>
                                <div className='flex flex-col gap-5 px-5 py-5 min-h-[290px] max-h-[290px]   '>
                                    {item.tips.map((tip) => (
                                        <div className='flex items-center gap-2  '>
                                            <span className='icon-material-symbols_check-circle-outline-rounded '></span>
                                            <span className='text-[20px]'>{tip}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center py-5'>
                                    <Button className='bg-[#FAFF00] text-[23px]' variant="default">Buy</Button>
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

            <div className='hidden md:grid md:grid-cols-3 md:gap-5 justify-between h-full rounded-xl '>
                {data.map((item,index) => (
                    <Fade key={index}>
                        <Card className='card  bg-[#222] w-[275px] h-[397px] flex flex-col justify-between '>
                            <div className='flex flex-col justify-center items-center bg-[#FAFF00] rounded-t-lg text-black h-[112px] py-5'>
                                <span className='text-[20px] font-bold'>{item.title}</span>
                                <span className='text-[20px] font-bold'>{item.price}</span>
                            </div>

                            <div className='  flex flex-col gap-5 py-5 px-2 justify-start items-start  h-full'>
                                {item.tips.map((tip,index) => (
                                    <div className='flex items-center gap-2 ' key={index}>
                                        <span className='icon-material-symbols_check-circle-outline-rounded '></span>
                                        <span>{tip}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center py-4 '>
                                <Button variant='default' className='text-[19px]'>Buy </Button>
                            </div>

                        </Card>
                    </Fade>

                ))}
            </div>

        </div>
    )
}

export default Membership
