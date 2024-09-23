import React from 'react'
import { FaTag } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";
import user from "../../../assets/user2.png"

const Navbar = () => {
  return (
    <header id='header' className='flex items-center w-full justify-between absolute left-0 top-0 right-0 z-50 px-52 py-4 pt-6'>
        <div className='flex items-center gap-x-4 '>
            <span className='rounded-full bg-dark-purple'><IoAirplane color='#fff' size={32} /></span> <span className='roboto-bold text-xl text-dark-gray select-none'>PLANE SCAPE</span>
        </div>
        <div className='flex items-center gap-x-6'>
            <div className='flex items-center cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <FaTag color='#4B0097'/> <span className='text-dark-gray/70 roboto-regular select-none text-sm'>Deals</span> 
                </div>
            </div>
            <div className='flex items-center cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <BiWorld color='#4B0097'/> <span className='text-dark-gray/70 roboto-regular select-none text-sm'>Discover</span> 
                </div>
            </div>

            <div className='flex items-center cursor-pointer'>
                <div className='flex items-center gap-x-2'>
                    <div className='rounded-full w-[30px] h-[30px]'>
                        <img src={user} className='w-full h-full object-cover rounded-full' alt="user" />
                    </div> 
                    <span className='text-dark-gray/70 roboto-regular select-none text-sm'>Joane Smith</span> 
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar