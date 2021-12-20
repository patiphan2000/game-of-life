import React from 'react'
import {FaGithub} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='grid grid-cols-1 h-[150px] w-full bg-violet-400 mt-8 justify-center'>
            <p className='text-center mt-8'>APP BY PATIPHAN2000</p>
            <button className='text-2xl justify-self-center mb-12 hover:text-violet-800'
            onClick={()=>{window.open('https://github.com/patiphan2000/game-of-life', '_blank');}}>
                <FaGithub />
            </button>
        </div>
    )
}
