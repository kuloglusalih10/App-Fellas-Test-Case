import React,{useState} from 'react'
import {  Select, Field, Label, Radio, RadioGroup  } from '@headlessui/react';
import clsx from 'clsx'
import { FaCaretDown } from "react-icons/fa";
import { setSortBy, setStops, setAirline, setArrivalTime, setFilteredFlights } from '../../../stores/flights/actions';
import { useSortBy, useAirline, useArrivalTime, useStops, useFlights } from '../../../stores/flights/hooks';
import { getFilter } from '../../../utils/getfilter';
import { airlines } from '../../../utils/consts/airlines';

const Filter = () => {

    let sortBy = useSortBy();
    let arrivalTime = useArrivalTime();
    let stops = useStops();
    let airline = useAirline();
    let flights = useFlights();


    // sıralama seçeneğinin değişmesi

    const handleSortBy = (e) => {

        setSortBy(e.target.value);
        const filteredFlights = getFilter(e.target.value, arrivalTime, stops, airline, flights);
        setFilteredFlights(filteredFlights);

    }

    // Varış saatinin filtrelenmesi
    const handleArrivalTime = (e) => {

        setArrivalTime(e);
        const filteredFlights = getFilter(sortBy, e, stops, airline, flights);
        setFilteredFlights(filteredFlights);

    }
    // stops değerinin filtrelenmesi

    const handleStops = (e) => {

        setStops(e);
        const filteredFlights = getFilter(sortBy, arrivalTime, e, airline, flights);
        setFilteredFlights(filteredFlights);

    }

    // airline değerinin filtrelenmesi

    const handleAirline = (e) => {

        setAirline(e);
        const filteredFlights = getFilter(sortBy, arrivalTime, stops, e, flights);
        setFilteredFlights(filteredFlights);

    }
    
    return (

        <div className='h-full'>

            <h2 className='roboto-medium text-sm'>Sort by:</h2>
            
            <div className="relative">
                <Select
                    className={clsx(
                    'mt-3 block w-full appearance-none rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-dark-gray ',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ',
                    '*:text-black'
                    )}

                    value={sortBy}
                    onChange={ handleSortBy}
                >
                    <option value="lowPrice">Lowest Price</option>
                    <option value="highPrice">Highest Price</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </Select>
                <FaCaretDown
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-dark-purple"
                    aria-hidden="true"
                    
                />
            </div>

            <h2 className='roboto-medium text-sm mt-5 mb-4'>Arrival Time</h2>
            <RadioGroup value={arrivalTime} onChange={ handleArrivalTime} >
                
                <Field key={'forenoon'} className="flex items-center gap-2 ">
                    <Radio
                        value='forenoon'
                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                    >
                        
                    </Radio>
                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">5:00 AM - 11:59 PM</Label>
                </Field>
                <Field key={'afternoon'} className="flex items-center gap-2 mt-2 ">
                    <Radio
                        value='afternoon'
                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                    >

                    </Radio>
                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">12:00 AM - 5:59 PM</Label>
                </Field>
                
            </RadioGroup>

            <h2 className='roboto-medium text-sm mt-5 mb-4'>Stops</h2>
            <RadioGroup value={stops} onChange={handleStops} >
                
                <Field key={1} className="flex items-center gap-2 ">
                    <Radio
                        value={1}
                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                    >
                        
                    </Radio>
                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">Nonstop</Label>
                </Field>
                <Field key={2} className="flex items-center gap-2 mt-2 ">
                    <Radio
                        value={2}
                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                    >

                    </Radio>
                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">1 Stop</Label>
                </Field>
                <Field key={3} className="flex items-center gap-2 mt-2 ">
                    <Radio
                        value={3}
                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                    >

                    </Radio>
                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">2+ Stops</Label>
                </Field>
                
            </RadioGroup>

            <h2 className='roboto-medium text-sm mt-5 mb-3'>Airlines Included</h2>
            <RadioGroup value={airline} onChange={handleAirline} >

                {
                    airlines.map((airline) => {
                        return (

                            <Field key={airline.iata} className="flex items-center gap-2 mb-2.5">
                                <Radio
                                    value={airline.iata}
                                    className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                                >
                                    
                                </Radio>
                                <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm w-full flex items-center justify-between">{airline.publicName} <span className='text-dark-gray'>$230</span></Label>
                            </Field>

                        )
                    })
                }
                
                
            </RadioGroup>

        </div>
    )
}

export default Filter