import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaUndoAlt } from 'react-icons/fa'

export default function Navbar({ run, runGame, handleRun, reset }) {
    return (
        <div className='flex h-20 pl-6 pr-6 pt-auto border-b-2 border-opacity-25 items-center self-center 
        justify-between bg-violet-600'>
            <p className='font-semibold text-2xl text-white'>Game of Life</p>
            <div className='grid grid-cols-2 gap-2'>
                <button className={`rounded-full font-semibold w-20 h-10 
                ease-linear duration-100
                ${!run? 'bg-green-600 hover:bg-green-300':'bg-red-600 hover:bg-red-300'}`} onClick={handleRun}>{run? 'STOP':'START'}</button>
                <button className='text-4xl text-violet-800
                hover:text-violet-400 ease-linear' onClick={runGame}><BsFillArrowRightCircleFill /></button>
            </div>
            <button className={`text-2xl text-violet-800 ml-2 ease-linear
            ${run? 'cursor-not-allowed':'hover:text-violet-400'}`} onClick={reset}><FaUndoAlt /></button>
        </div>
    )
}
