import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import ReactStars from 'react-stars'
import {  Select } from '@headlessui/react';
import clsx from 'clsx'
import { MdInfoOutline } from "react-icons/md";
import alitalia from "../../assets/alitalia.png"

const index = () => {

    const tabs = ['Times', 'Stops', 'Airlines', 'Airports', 'Amenities'];

    const getStar = (count) => {

        const stars = [];

        for (let index = 0; index < 6; index++) {

            
            stars.push (index < count ? <ReactStars edit={false} count={1} color2='#959292' color1='#1c1e23'/> :  <ReactStars edit={false} count={1} color2='#1c1e23' color1='#959292'/>)
            
        }
        return stars;
    }

    return (

        <div className='w-full h-full bg-main '>

            <div className='w-full flex items-center justify-between py-4 px-20 bg-white border-b'>
                <div className='flex gap-x-4 '>
                    {
                        tabs.map((tab)=> {

                            return (

                                <div className='text-center py-2 px-4 border rounded-md roboto-regular text-sm cursor-pointer'>
                                    {tab}
                                </div>
                            )
                        })
                    }

                    <div className='text-center py-2 px-4 flex items-center gap-x-2 roboto-regular text-sm text-dark-purple cursor-pointer'>
                        Edit Search <FaAngleDown />
                    </div>
                    
                </div>
                <div className=' flex items-center gap-x-6 select-none'>

                    <div className='grid grid-cols-3 '>

                        {
                            getStar(2)
                        }


                    </div>

                    <div className='w-[1px] h-6 bg-ligth-gray/50'/>
                    
                    <div className='grid grid-cols-3 '>

                        {
                            getStar(3)
                        }


                    </div>

                    <div className='w-[1px] h-6 bg-ligth-gray/50'/>
                    
                    <div className='grid grid-cols-3 '>

                        {
                            getStar(4)
                        }


                    </div>

                    <div className='w-[1px] h-6 bg-ligth-gray/50'/><div className='grid grid-cols-3 '>

                        {
                            getStar(5)
                        }


                    </div>

                    <div className='w-[1px] h-6 bg-ligth-gray/50'/><div className='grid grid-cols-3 '>

                        {
                            getStar(6)
                        }

                    </div>

                </div>

            </div>


            <div className='w-full px-32'>

                <div className='w-full flex items-center justify-between mt-6'>
                    <div className='flex items-center justify-center gap-x-1'>
                        <h2 className='robot-regular text-center '>Sort by:</h2>
                        <div className="relative cursor-pointer">
                            <Select
                                className={clsx(
                                ' block w-full appearance-none rounded-lg bg-main border-none p-0  pr-10 text-dark-gray roboto-bold mt-0.5',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer',
                                '*:text-black'
                                )}

                                value={'lowPrice'}
                                onChange={ ()=> console.log('e')}
                            >
                                <option value="recommended" className='roboto-bold'>Recommended</option>
                                <option value="highPrice">Highest Price</option>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </Select>
                            <FaAngleDown
                                className="group pointer-events-none absolute top-[20%] right-2.5 size-4 fill-dark-purple"
                                aria-hidden="true"
                                
                            />
                        </div>

                    </div>

                    <div className='flex items-center gap-x-2 roboto-regular text-dark-gray'>
                        <MdInfoOutline color='#4B0097' size={23}/> Avg Fare: <span className='roboto-medium'>$225</span>
                    </div>
                </div>
                <div className='border rounded-md bg-white py-6 px-6 mt-6 flex items-center'>

                    <div className='flex w-full '>

                        <div className='flex w-[60%]'>

                            {/* logo */}
                            <div className='w-[12%]'>
                                <img src={alitalia} alt="Airlines logo" className='object-cover' />
                            </div>

                            {/* uçuş bilgileri */}

                            <div className='px-8 pt-3.5 w-full'>
                                <h2 className='roboto-light text-2xl text-dark-gray/60'>
                                    07:40 AM - 09:12 AM
                                </h2>
                                <div className='flex items-center mt-7 w-full justify-between'>
                                    <div className='w-1/3'>
                                        <h3 className='text-sm roboto-medium line-clamp-1 pr-5 text-dark-gray/80'>
                                            Delta Air Lines
                                        </h3>
                                        <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-dark-purple cursor-pointer mt-1'>
                                            Flight Details <FaAngleDown />
                                        </div>
                                    </div>
                                    <div className=' w-1/3'>
                                        <h3 className='text-sm roboto-medium pr-5 text-dark-gray/80'>
                                            Nonstop
                                        </h3>
                                        <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-ligth-gray cursor-pointer mt-1'>
                                            2h 32m
                                        </div>
                                    </div>
                                    <div className=' w-1/3'>
                                        <h3 className='text-sm roboto-medium pr-5 text-dark-gray/80'>
                                            SFO to LAX
                                        </h3>
                                        <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-ligth-gray cursor-pointer mt-1'>
                                            DL 143
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Fiyatlandırmalar */}

                        <div className='flex items-center w-[40%] justify-center gap-x-3'>
                                <div className='border rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5'>
                                    <h2 className='text-dark-gray/80 roboto-bold text-center text-xl' >
                                        $156
                                    </h2>
                                    <span className='text-ligth-gray text-sm'>
                                        Main
                                    </span>
                                </div>
                                <div className='border rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5'>
                                    <h2 className='text-dark-gray/80 roboto-bold text-center text-xl' >
                                        $204
                                    </h2>
                                    <span className='text-ligth-gray text-sm'>
                                        Comfort+
                                    </span>
                                </div>
                                <div className=' rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5 bg-ligth-gray/5'>
                                    <div className='w-full flex items-center h-full justify-center gap-x-3'>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                    </div>
                                </div>
                                <div className='border rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5'>
                                    <h2 className='text-dark-gray/80 roboto-bold text-center text-xl' >
                                        $386
                                    </h2>
                                    <span className='text-ligth-gray text-sm'>
                                        Delta one
                                    </span>
                                </div>
                                <div className=' rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5 bg-ligth-gray/5'>
                                    <div className='w-full flex items-center h-full justify-center gap-x-3'>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                        <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default index