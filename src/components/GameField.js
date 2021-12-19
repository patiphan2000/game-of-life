import React from 'react'

export default function GameField({ data, handleClick }) {

    let field = data

    const checkMouseDown = () => {

    }

    return (
        <div className='grid justify-items-center overflow-hidden'>
            <div className='flex flex-col p-auto'>
                {field.map((row, i) => {
                    return <div key={i} className='flex'> 
                        {row.map((cell, j) => { 
                            return (
                                <div key={j} className={`w-7 h-7 border-2 border-slate-200
                                ${cell>0? 'bg-black':'bg-white'} cursor-pointer
                                hover:bg-slate-300`} 
                                onClick={()=>{handleClick(i,j);}}
                                // onDragEnter={()=>{handleClick(i,j);}}
                                ></div>
                            )
                        })
                    }
                    </div>
            })}
            </div>
        </div>
    )
}
