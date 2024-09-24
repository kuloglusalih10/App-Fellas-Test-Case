import React, {useState} from 'react'
import { IoAirplane } from "react-icons/io5";
import classNames from 'classnames';
import { BiSolidPlaneTakeOff,BiSolidPlaneLand } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";
import DatePicker from "react-datepicker";
import clsx from 'clsx';
import { destinations } from '../../../utils/consts/destinations';
import { useStartDate, useEndDate, useFlightDirection, useArrivalLocation, useDepartureLocation } from '../../../stores/flights/hooks';
import { setStartDate, setEndDate, setFlightDirection, setArrivalLocation, setDepartureLocation, fetchFlights } from '../../../stores/flights/actions';
import {format, differenceInDays, parse} from "date-fns"

import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';

const Search = () => {


    const departureLocation = useDepartureLocation();
    const arrivalLocation = useArrivalLocation();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const flightDirection = useFlightDirection();
    
    // seyahat yönünün değiştirlmesi

    const handleSetDirection = (direction) => {

        setFlightDirection(direction);
        setArrivalLocation(departureLocation);
        setDepartureLocation(arrivalLocation);
    }

    // başlangıç tarihinin değitirlmesi

    const handleSetStartDate = (date) => {
        
        const formattedDate = format(date, 'yyyy-MM-dd');
        setStartDate(formattedDate);
    }

    // bitiş tarihinin değitirlmesi

    const handleSetEndDate = (date) => {

        const formattedDate = format(date, 'yyyy-MM-dd');
        setEndDate(formattedDate);
    }

    // Arama eventin

    const handleSearch = () => {

        const fromDate = startDate === '' ? new Date() : parse(startDate, 'yyyy-MM-dd', new Date());  // diffrenceInDays içi tarihlerin formatlanması
        const toDate = endDate === '' ? new Date() : parse(endDate, 'yyyy-MM-dd', new Date());
    
        const differenceDays = differenceInDays(toDate, fromDate);

    
        if (differenceDays > 3) {

            toast('En fazla 3 gün aralığı seçilebilir', { type: 'error' });

        } else if (differenceDays < 0) {

            toast('Bitiş tarihi başlangıçtan önce olamaz', { type: 'error', style:{fontSize: 14} });

        } else {

            fetchFlights();
        }
    }

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
                            flightDirection == 'D'
                                ? ' bg-dark-purple text-white border-dark-purple '
                                : 'text-dark-purple bg-ligth-purple border-ligth-purple'
                            )
                            
                        } onClick={() => handleSetDirection('D')}>
                            Departure
                        </div>
                        <div className={
                            classNames(
                            'w-full border rounded-r-full flex items-center justify-center py-2.5 text-sm font-medium leading-5 roboto-regular duration-200 transition-colors',
                            '   focus:outline-none ',
                            flightDirection == 'A'
                                ? 'bg-dark-purple text-white border-dark-purple'
                                : 'text-dark-purple  bg-ligth-purple border-ligth-purple'
                            )
                        } onClick={()=> handleSetDirection('A')}>
                        Arrival
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex items-center w-full gap-x-4'>
                <div className='w-1/2 flex items-center justify-start mt-4 gap-x-1.5'>
                    <div className='w-1/2'>
                        <div >

                            <div className='flex items-center w-full' >
                                
                                <span className={classNames('border-y-2 border-l-2 rounded-l-xl  border-ligth-gray/40 py-1.5 pl-3 h-full cursor-pointer', {'bg-ligth-gray/5 border-black/30 cursor-not-allowed': flightDirection == 'A'})}>
                                    <BiSolidPlaneTakeOff color='#4B0097' size={24}/>
                                </span>
                                <select

                                    className={clsx(
                                        'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-[2px] bg-white/5 py-[6px] pr-8 pl-3 text-sm/6 text-dark-purple outline-none cursor-pointer',{' border-black/30 cursor-not-allowed bg-ligth-gray/5': flightDirection == 'A'}
                                    )}

                                    value={departureLocation}
                                    
                                    onChange={ (e) => setDepartureLocation(e.target.value)}
                                    
                                >

                                    {
                                        flightDirection == 'A' ? 

                                            <option disabled  value={departureLocation} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                Amsterdam
                                            </option>

                                        :
                                    
                                        destinations.map((city, index) => (
                                           
                                            <option key={city.iata} value={city.iata} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                {city.city}
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
                                <span className={classNames('border-y-2 border-l-2 rounded-l-[2px]  border-ligth-gray/40 py-1.5 pl-3 h-full cursor-pointer',{'bg-ligth-gray/5 border-black/30 cursor-not-allowed': flightDirection == 'D'})}>
                                    <BiSolidPlaneLand color='#4B0097' size={24}/>
                                </span>
                                <select
                                    className={clsx(
                                        'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-xl bg-white/5 py-[6px] pr-8 pl-3 text-sm/6 text-dark-purple outline-none cursor-pointer',{'bg-ligth-gray/5 border-black/30 cursor-not-allowed': flightDirection == 'D'}
                                    )}
                                    name='arrival'
                                    value={arrivalLocation}
                                    onChange={ (e) => setArrivalLocation(e.target.value)}
                                        
                                >

                                    {
                                        flightDirection == 'D' ? 

                                            <option disabled   value={'AMS'} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                Amsterdam
                                            </option>

                                        :
                                    
                                        destinations.map((city,index) => (
                                           
                                            <option  key={city.iata} value={city.iata } className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full rounded-md">
                                                {city.city}
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

                                <DatePicker selected={startDate} onChange={handleSetStartDate} className='outline-none border-y-2 border-r-2 border-ligth-gray/40 rounded-r-[2px] py-1.5 pl-3'/>
                                
                            </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center w-full' >
                            <span className='border-y-2 border-l-2 rounded-l-[2px]  border-ligth-gray/40 py-1.5 pl-3 h-full'>
                                <IoMdCalendar color='#4B0097' size={24}/>
                            </span>
                            <DatePicker selected={endDate} onChange={handleSetEndDate} className='outline-none border-y-2 border-r-2 border-ligth-gray/40 rounded-r-xl py-1.5 pl-3'/>
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