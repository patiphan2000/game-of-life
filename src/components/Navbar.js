import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaUndoAlt } from 'react-icons/fa'

export default function Navbar({ run, runGame, handleRun, reset }) {
    return (
        <div className='flex h-20 pl-6 pr-6 pt-auto border-b-2 border-opacity-25 items-center self-center 
        justify-between bg-violet-600'>
            <div className='mb-2 sm:mb-0 flex flex-row'>
                <div class='h-6 w-6 self-center mr-2'>
                    <img class='h-6 w-6 self-center' src='/logo192.png' />
                </div>
                <p className='text-2xl no-underline text-grey-darkest font-semibold'>Game of Life</p>
            </div>
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
