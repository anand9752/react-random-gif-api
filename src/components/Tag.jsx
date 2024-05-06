import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Tag = () => {
   const [tag, setTag] = useState('car');
   const {gif , loading, fetchData} = useGif(tag);
  


  return (
    <div className='w-[600px]  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[20px]' >
         <h1 className='text-2xl underline font-bold'>Random GIF</h1>

         {
          loading ? <Spinner></Spinner> : <img src={gif} alt="" width='450' />
         }

           <input type="text" className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={(e)=> setTag(e.target.value)}  value={tag}/>
               
         <button className='w-10/12 opacity-90 bg-white text-lg py-2 rounded-lg hover:bg-slate-400 active:checked:bg-slate-500' onClick={ () => {fetchData(tag)}}>Generate</button>
    </div>
  )
}

export default Tag
