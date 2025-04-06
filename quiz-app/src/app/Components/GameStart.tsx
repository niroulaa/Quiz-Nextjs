import React from 'react'
import {Play} from 'lucide-react'

const GameStart = ({GameCondition , setGameCondition}) => {
    const handleCondtion = () =>{
        setGameCondition("playing") 

    }
  return (
    <div className='text-center p-8 bg-gray-200   '>
        <h1 className='text-4xl font-bold mb-7'>General Quiz</h1>
        <p className='text-3xl font-bold'> Are you ready? Click the button below to start ! </p>

        <button className='bg-blue-600 w-28 h-10 mt-4 rounded-3xl' onClick={handleCondtion}>
           Start 
           
        </button>
       
    </div>
  )
}

export default GameStart
