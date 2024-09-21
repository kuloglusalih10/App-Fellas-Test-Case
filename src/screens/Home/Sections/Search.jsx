import React, {useState} from 'react'
import { IoAirplane } from "react-icons/io5";
import classNames from 'classnames';
import { BiSolidPlaneTakeOff,BiSolidPlaneLand } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";
import DatePicker from "react-datepicker";
import clsx from 'clsx';

import "react-datepicker/dist/react-datepicker.css";

const Search = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedDirection, setSelectedDirection] = useState('arrival')

    
    const destinations = [
        { id: 1, name: 'Durward Reynolds' },
        { id: 2, name: 'Kenton Towne' },
        { id: 3, name: 'Therese Wunsch' },
        { id: 4, name: 'Benedict Kessler' },
        { id: 5, name: 'Katelyn Rohan' },
      ]

    const handleDirection = (direction) => {

        
        setSelectedDirection(direction);
        
        if(direction == 'arrival') {

            setDeparture('Amsterdam');
            setArrival(destinations[0].name)
            
        }
        else {
            setArrival('Amsterdam');
            setDeparture(destinations[0].name)    
        }
       
    }

    

    const handleSearch = () => {
        console.log("Departure : ", departure, " Arrival : " , arrival);
    }
   

    const [departure, setDeparture] = useState(selectedDirection == 'arrival' ? 'Amsterdam' : destinations[0].name);
    const [arrival, setArrival] = useState(selectedDirection == 'departure' ? 'Amsterdam' : destinations[0].name);

  return (
        <div className='w-full px-4 py-6 border bg-white rounded-lg'> 

            <div className='w-full  flex items-center justify-between'>
                <div className='flex items-center gap-x-4 '>
                    <span className=''><IoAirplane color='#1c1e23' size={22} /></span> <span className='roboto-bold text-sm text-dark-gray select-none'>BOOK YOUR FLIGHT</span>
                </div>  
                <div className='w-[200px]'>
                    <div className="flex rounded-lg   mx-auto w-full cursor-pointer">
                        <div className={
                            classNames(
                            'w-full border rounded-l-full flex items-center justify-center py-2 text-sm font-medium leading-5 roboto-regular duration-200 transition-colors',
                            '  focus:outline-none ',
                            selectedDirection == 'departure'
                                ? ' bg-dark-purple text-white border-dark-purple '
                                : 'text-dark-purple bg-ligth-purple border-ligth-purple'
                            )
                            
                        } onClick={()=> handleDirection('departure')}>
                            Departure
                        </div>
                        <div className={
                            classNames(
                            'w-full border rounded-r-full flex items-center justify-center py-2.5 text-sm font-medium leading-5 roboto-regular duration-200 transition-colors',
                            '   focus:outline-none ',
                            selectedDirection == 'arrival'
                                ? 'bg-dark-purple text-white border-dark-purple'
                                : 'text-dark-purple  bg-ligth-purple border-ligth-purple'
                            )
                        } onClick={()=> handleDirection('arrival')}>
                        Arrival
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex items-center w-full gap-x-4'>
                <div className='w-1/2 flex items-center justify-start mt-4 gap-x-1.5'>
                    <div className='w-1/2'>
                        <div >

                            <div className='flex items-center w-full ' >
                                <span className={classNames('border-y-2 border-l-2 rounded-l-xl  border-ligth-gray/40 py-1.5 pl-3 h-full', {'bg-ligth-gray/10 border-black/30 cursor-not-allowed': selectedDirection == 'arrival'})}>
                                    <BiSolidPlaneTakeOff color='#4B0097' size={24}/>
                                </span>
                                <select

                                    className={clsx(
                                        'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-[2px] bg-white/5 py-[6px] pr-8 pl-3 text-sm/6 text-dark-purple outline-none',{' border-black/30 cursor-not-allowed bg-ligth-gray/10': selectedDirection == 'arrival'}
                                    )}
                                    name='departure'
                                    value={departure}
                                    onChange={ () => setDeparture(event.target.value)}
                                    
                                >

                                    {
                                        selectedDirection == 'arrival' ? 

                                            <option disabled  value={'Amsterdam'} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                Amsterdam
                                            </option>

                                        :
                                    
                                        destinations.map((city) => (
                                            <option key={city.id} value={city.name} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                {city.name}
                                            </option>
                                        ))
                                    
                                    }

                                </select>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div >
                            <div className='flex items-center w-full' >
                                <span className={classNames('border-y-2 border-l-2 rounded-l-[2px]  border-ligth-gray/40 py-1.5 pl-3 h-full',{'bg-ligth-gray/10 border-black/30 cursor-not-allowed': selectedDirection == 'departure'})}>
                                    <BiSolidPlaneLand color='#4B0097' size={24}/>
                                </span>
                                <select
                                    className={clsx(
                                        'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-xl bg-white/5 py-[6px] pr-8 pl-3 text-sm/6 text-dark-purple outline-none',{'bg-ligth-gray/10 border-black/30 cursor-not-allowed': selectedDirection == 'departure'}
                                    )}
                                    name='arrival'
                                    value={arrival}
                                    onChange={ ()=> setArrival(event.target.value)}
                                        
                                >

                                    {
                                        selectedDirection == 'departure' ? 

                                            <option disabled  value={'Amsterdam'} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                Amsterdam
                                            </option>

                                        :
                                    
                                        destinations.map((city) => (
                                            <option key={city.id} value={city.name} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                {city.name}
                                            </option>
                                        ))
                                    
                                    }


                                </select>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-start mt-4 gap-x-1.5'>
                    <div className='w-1/2'>
                            <div className='flex items-center w-full' >
                                <span className='border-y-2 border-l-2 rounded-l-xl  border-ligth-gray/40 py-1.5 pl-3 h-full'>
                                    <IoMdCalendar color='#4B0097' size={24}/>
                                </span>

                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='outline-none border-y-2 border-r-2 border-ligth-gray/40 rounded-r-[2px] py-1.5 pl-3'/>
                                
                            </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center w-full' >
                            <span className='border-y-2 border-l-2 rounded-l-[2px]  border-ligth-gray/40 py-1.5 pl-3 h-full'>
                                <IoMdCalendar color='#4B0097' size={24}/>
                            </span>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className='outline-none border-y-2 border-r-2 border-ligth-gray/40 rounded-r-xl py-1.5 pl-3'/>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <button onClick={handleSearch} className='bg-dark-purple px-4 py-2 text-white rounded-md mt-6 hover:bg-dark-purple/95'>Show flights</button>
            </div>

        </div>
  )
}

export default Search