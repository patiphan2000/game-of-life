import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaUndoAlt } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className='flex h-20 pl-6 pr-6 pt-auto border-b-2 border-opacity-25 items-center self-center 
        justify-between bg-violet-600'>
            <p className='font-semibold text-2xl text-white'>Game of Life</p>
            <div className='grid grid-cols-2 gap-2'>
                <button className='rounded-full bg-violet-200 font-semibold w-20 h-10 
                ease-linear duration-100
                hover:bg-violet-400'>START</button>
                <button className='text-4xl text-violet-200
                hover:text-violet-400'><BsFillArrowRightCircleFill /></button>
            </div>
            <button className='text-2xl text-violet-200 ml-2
            hover:text-violet-400'><FaUndoAlt /></button>
        </div>
    )
}
