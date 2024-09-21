import React from 'react'
import slide_1 from "../../../assets/slide_1.2.jpg"
import slide_1_oto from "../../../assets/slide_1_oto.png"
import slide_2 from "../../../assets/slide_2.jpg"
import slide_2_hotel from "../../../assets/slide_2_hotel.png"
import slide_3 from "../../../assets/slide_3.3.jpg"
import slide_3_umbrella from "../../../assets/slide_3_umbrella.png"

const Sidebar = () => {
  return (
    <div className='w-full'>
         <div className='rounded-lg w-full h-[260px] relative overflow-hidden'>
            <img src={slide_1} alt="Car Rentals" className='rounded-xl object-cover  w-full h-full cursor-pointer hover:scale-110 duration-700 transition-transform' />
            <div className='absolute inset-0  rounded-xl bg-gradient-to-br from-transparent to-dark-orange/50  flex items-start justify-end flex-col pl-6 pb-6 pointer-events-none' >

                <img src={slide_1_oto} alt="car" className='w-9 h-9' />
                <h3 className='text-white roboto-bold text-xl '>CAR RENTALS</h3>
            </div>
        </div>
        <div className='rounded-lg w-full h-[260px] relative overflow-hidden mt-5'>
            <img src={slide_2} alt="Car Rentals" className='rounded-xl object-cover w-full h-full cursor-pointer hover:scale-110 duration-700 transition-transform' />
            <div className='absolute inset-0  rounded-xl flex items-start justify-end bg-gradient-to-b from-transparent to-black/40 flex-col pb-6 pointer-events-none' >

                <img src={slide_2_hotel} alt="car" className='w-22 h-16 pl-3' />
                <h3 className='text-white roboto-bold text-xl pl-6'>HOTELS</h3>
            </div>
        </div>
        <div className='rounded-lg w-full h-[260px] relative overflow-hidden  mt-5'>
            <img src={slide_3} alt="Car Rentals" className='rounded-xl object-cover w-full h-full cursor-pointer  hover:scale-110 duration-700 transition-transform' />
            <div className='absolute inset-0  rounded-xl bg-gradient-to-b from-transparent to-black/60  flex items-start justify-end flex-col  pb-6 pointer-events-none' >

                <img src={slide_3_umbrella} alt="car" className='w-22 h-16 pl-4' />
                <h3 className='text-white roboto-bold text-xl pl-6'>TRAVEL PACKAGES</h3>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
