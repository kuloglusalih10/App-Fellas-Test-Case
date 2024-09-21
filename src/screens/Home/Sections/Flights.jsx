import React from 'react'
import { LuPlaneTakeoff,LuPlaneLanding } from "react-icons/lu";
import alitalia from "../../../assets/alitalia.png";
import { IoAirplane } from "react-icons/io5";

const Flights = () => {

  return (
        <div className='w-full '>
            <div className='w-full  bg-white border rounded-t-lg rounded-br-lg '>
                <div className='w-full pt-6 pb-4 px-4'>
                    <h2 className='roboto-medium text-sm'>
                        Milano - Madrid
                    </h2>
                    <div className='flex items-center mt-4 w-full'>
                        <div className='flex flex-col w-1/5 justify-center'>
                            <div className='flex items-center gap-x-2'>
                                <LuPlaneTakeoff color='#696666'/> <span className='text-xs roboto-regular text-ligth-gray'>Departure</span>
                            </div>
                            <h2 className='roboto-bold text-sm mt-1.5'>
                                07:30 AM
                            </h2>
                            <p className='roboto-medium  text-sm  text-medium-gray mt-1'>
                                Airport : MXP
                            </p>         
                        </div>
                        <div className='w-1/5 px-6 items-center '>
                            <div className='h-[2px] bg-ligth-gray ' />
                        </div>
                        <div className='flex flex-col w-1/5 items-center'>
                            <div className=' w-11'>
                                <img className='object-cober' src={alitalia} alt="Alitalia" />
                            </div>
                            <IoAirplane color='#4B0097' size={22} className=''/>
                            <p className='roboto-medium  text-sm  text-medium-gray mt-0.5'>
                                2h 25m (Nonstop)
                            </p>         
                        </div>
                        <div className='w-1/5 px-6 items-center '>
                            <div className='h-[2px] bg-ligth-gray ' />
                        </div>
                        <div className='flex flex-col w-1/5 justify-center items-center'>
                            <div className='flex items-center gap-x-2'>
                                <LuPlaneLanding color='#696666'/> <span className='text-xs roboto-regular text-ligth-gray'>Arrival</span>
                            </div>
                            <h2 className='roboto-bold text-sm mt-1.5'>
                                10:25 PM
                            </h2>
                            <p className='roboto-medium  text-sm  text-medium-gray mt-1'>
                                Airport : MAD
                            </p>         
                        </div>
                    </div>
                </div>

                <div className=' w-full flex items-center justify-between pl-4 h-16'>
                    <div className='flex flex-col w-1/5  h-full'>
                        <h2 className='text-dark-purple text-md roboto-bold'>Price: $200</h2>
                        <span className='text-xs roboto-medium text-medium-gray mt-0.5'>Round Trip</span>
                    </div>
                <button className='roboto-bold text-sm flex items-center justify-center px-12 bg-dark-purple text-white h-full rounded-tl-lg rounded-br-lg'>
                        Book Flight
                </button>
                </div>
            </div>
            <button className='px-1 py-3 underline text-dark-purple bg-ligth-purple w-1/5 rounded-b-lg text-center text-sm roboto-regular'>
                Check the details
            </button>
        </div>
  )
}

export default Flights