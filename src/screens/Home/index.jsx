import React, { useEffect } from 'react'
import Navbar from './Sections/Navbar';
import Search from './Sections/Search';
import Flights from './Sections/Flights';
import Filter from './Sections/Filter';
import Sidebar from './Sections/Sidebar';
import { fetchFlights } from '../../stores/flights/actions';


const index = () => {

    useEffect(()=>{
        
        fetchFlights();
    },[])


    return (
        <div className='w-full h-full '>

            <Navbar/>
            
            <div className='w-full h-full flex items-center justify-between mt-6'>
                <div className='w-3/4 h-full'>
                    
                    <Search />
                    
                    <div className='flex mt-7'>
                        <div className='w-3/4 h-full'>
                            <Flights/>
                        </div>
                        <div className='w-1/4 h-full pl-6 pt-2'>
                            <Filter/>
                        </div>
                    </div>

                    
                </div>
                <div className='w-1/4 h-full pl-6 '>

                   <Sidebar/>
                    
                </div>
            </div>

        </div>
    )

}

export default index