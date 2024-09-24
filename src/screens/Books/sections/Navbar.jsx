import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import ReactStars from 'react-stars'

const Navbar = () => {

    const tabs = ['Times', 'Stops', 'Airlines', 'Airports', 'Amenities'];

    const getStar = (count) => {

        const stars = [];

        for (let index = 0; index < 6; index++) {

            
            stars.push (index < count ? <ReactStars key={index} edit={false} count={1} color2='#959292' color1='#1c1e23'/> :  <ReactStars key={index} edit={false} count={1} color2='#1c1e23' color1='#959292'/>)
            
        }
        return stars;
    }

    return (
        <div className='w-full flex items-center justify-between py-4 px-20 bg-white border-b'>
            <div className='flex gap-x-4 '>
                {
                    tabs.map((tab,i)=> {

                        return (

                            <div key={i} className='text-center py-2 px-4 border rounded-md roboto-regular text-sm cursor-pointer'>
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
    )
}

export default Navbar