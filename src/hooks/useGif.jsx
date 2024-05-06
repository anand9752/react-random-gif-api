import axios from 'axios';
import React, { useEffect, useState } from 'react'
const apikey =process.env.REACT_APP_GIPHY_API_KEY;

const rurl = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;

function useGif(tag) {
  


    const [gif,setGif] = useState('')
    const [loading,setLoading] = useState(false);
    
    async function fetchData(tag){
    setLoading(true);
    try {
      
      const {data} = await axios.get(tag ? `${rurl}&tag= ${tag} ` :rurl);
      
      const imgsrc = data.data.images.downsized_large.url;
      setGif(imgsrc);
    } catch (error) {
      console.log(error);
    }

     setLoading(false);
   
   }
  
    



   useEffect(() =>{
    fetchData('car');
   } , [])


 return {gif,loading,fetchData};
}

export default useGif
