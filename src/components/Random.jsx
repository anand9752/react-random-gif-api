import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Random = () => {
 

  const {gif , loading, fetchData} = useGif();


  return (
    <div className='w-[600px]  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[20px]' >
         <h1 className='text-2xl underline font-bold'>Random GIF</h1>

         {
          loading ? <Spinner></Spinner> : <img src={gif} alt="" width='450' />
         }
               
         <button className='w-10/12 opacity-90 bg-white text-lg py-2 rounded-lg hover:bg-slate-400 active:checked:bg-slate-500' onClick={()=>fetchData()}>Generate</button>
    </div>
  )
}

export default Random
