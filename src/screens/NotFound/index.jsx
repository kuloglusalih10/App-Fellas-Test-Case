import React from 'react'
import Lottie from 'react-lottie';
import * as animation404 from "../../assets/404.json"

const index = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        
        <Lottie  options={{animationData:animation404}} height={300} width={300} />
        <h2 className='text-[25px] poppins-semibold mt-8 text-dark-gray/80'>Page Not Found !</h2>
    </div>
  )
}

export default index