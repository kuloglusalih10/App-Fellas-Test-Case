import React from 'react'
import { IoAirplane } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import user from "../../assets/user2.png"
import { TabGroup, TabList, Tab, Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Select, Field, Label, Radio, RadioGroup  } from '@headlessui/react';
import classNames from 'classnames';
import { useState,useRef } from 'react';
import clsx from 'clsx'
import { BiSolidPlaneTakeOff,BiSolidPlaneLand } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";
import DatePicker from "react-datepicker";
import { LuPlaneTakeoff,LuPlaneLanding } from "react-icons/lu";
import alitalia from "../../assets/alitalia.png"
import { FaCaretDown } from "react-icons/fa";
import slide_1 from "../../assets/slide_1.2.jpg"
import slide_1_oto from "../../assets/slide_1_oto.png"
import slide_2 from "../../assets/slide_2.jpg"
import slide_2_hotel from "../../assets/slide_2_hotel.png"
import slide_3 from "../../assets/slide_3.3.jpg"
import slide_3_umbrella from "../../assets/slide_3_umbrella.png"

import "react-datepicker/dist/react-datepicker.css";





const index = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selecetArvl, setSelecetArvl] = useState(1)
    const [selecetStops, setSelecetStops] = useState(1)

    const people = [
        { id: 1, name: 'Durward Reynolds' },
        { id: 2, name: 'Kenton Towne' },
        { id: 3, name: 'Therese Wunsch' },
        { id: 4, name: 'Benedict Kessler' },
        { id: 5, name: 'Katelyn Rohan' },
      ]

    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [query, setQuery] = useState('');

    const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

    return (
        <div className='w-full h-full '>

            {/* Navbar */}
            <div className='flex items-center w-full justify-between'>
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
            </div>

            {/* Main */}
            <div className='w-full h-full flex items-center justify-between mt-6'>
                <div className='w-3/4 h-full'>
                    <TabGroup className='w-full px-4 py-6 border bg-white rounded-lg'> 

                        <div className='w-full  flex items-center justify-between'>
                            <div className='flex items-center gap-x-4 '>
                                <span className=''><IoAirplane color='#1c1e23' size={22} /></span> <span className='roboto-bold text-sm text-dark-gray select-none'>BOOK YOUR FLIGHT</span>
                            </div>  
                            <div className='w-[200px]'>
                                <TabList className="flex rounded-lg   mx-auto w-full">
                                    <Tab className={({ selected }) =>
                                        classNames(
                                        'w-full border rounded-l-full flex items-center justify-center py-2 text-sm font-medium leading-5 roboto-regular',
                                        '  focus:outline-none ',
                                        selected
                                            ? ' bg-dark-purple text-white border-dark-purple '
                                            : 'text-dark-purple bg-ligth-purple border-ligth-purple'
                                        )
                                    }>
                                        Round trip
                                    </Tab>
                                    <Tab className={({ selected }) =>
                                        classNames(
                                        'w-full border rounded-r-full flex items-center justify-center py-2.5 text-sm font-medium leading-5 roboto-regular',
                                        '   focus:outline-none ',
                                        selected
                                            ? 'bg-dark-purple text-white border-dark-purple'
                                            : 'text-dark-purple  bg-ligth-purple border-ligth-purple'
                                        )
                                    }>
                                    One way
                                    </Tab>
                                </TabList>
                                
                            </div>
                        </div>

                        <div className='flex items-center w-full gap-x-4'>
                            <div className='w-1/2 flex items-center justify-start mt-4 gap-x-1.5'>
                                <div className='w-1/2'>
                                    <Combobox value={selectedPerson}  onChange={setSelectedPerson} onClose={() => setQuery('')} >
                                        <div className='flex items-center w-full' >
                                            <span className='border-y-2 border-l-2 rounded-l-xl  border-ligth-gray/40 py-1.5 pl-3 h-full'>
                                                <BiSolidPlaneTakeOff color='#4B0097' size={24}/>
                                            </span>
                                            <ComboboxInput
                                                className={clsx(
                                                    'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-[2px] bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-dark-purple outline-none'
                                                )}
                                                aria-label="Assignee"
                                                displayValue={(person) => person?.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                                
                                                
                                            />
                                        </div>
                                        
                                        <ComboboxOptions anchor="bottom" className="border empty:invisible   bg-white rounded-md">
                                            {filteredPeople.map((person) => (
                                            <ComboboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full">
                                                {person.name}
                                            </ComboboxOption>
                                            ))}
                                        </ComboboxOptions>
                                        
                                    </Combobox>
                                </div>
                                <div className='w-1/2'>
                                    <Combobox value={selectedPerson}  onChange={setSelectedPerson} onClose={() => setQuery('')} >
                                        <div className='flex items-center w-full' >
                                            <span className='border-y-2 border-l-2 rounded-l-[2px]  border-ligth-gray/40 py-1.5 pl-3 h-full'>
                                                <BiSolidPlaneLand color='#4B0097' size={24}/>
                                            </span>
                                            <ComboboxInput
                                                className={clsx(
                                                    'w-full  border-y-2 border-r-2 border-ligth-gray/40 rounded-r-xl bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-dark-purple outline-none'
                                                )}
                                                aria-label="Assignee"
                                                displayValue={(person) => person?.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                                
                                            />
                                        </div>
                                        
                                        <ComboboxOptions anchor="bottom" className="border empty:invisible   bg-white rounded-md">
                                            {filteredPeople.map((person) => (
                                            <ComboboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100 p-2 cursor-pointer w-full">
                                                {person.name}
                                            </ComboboxOption>
                                            ))}
                                        </ComboboxOptions>
                                        
                                    </Combobox>
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
                            <button className='bg-dark-purple px-4 py-2 text-white rounded-md mt-6 hover:bg-dark-purple/95'>Show flights</button>
                        </div>

                    </TabGroup>
                    
                    {/* Uçuşlar  */}
                    <div className='flex mt-7'>
                        <div className='w-3/4 h-full'>
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
                            
                        </div>
                        <div className='w-1/4 h-full pl-6 pt-2'>
                            <h2 className='roboto-medium text-sm'>Sort by:</h2>
                            <div className="relative">
                                <Select
                                    className={clsx(
                                    'mt-3 block w-full appearance-none rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-dark-gray ',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ',
                                    '*:text-black'
                                    )}
                                >
                                    <option value="active">Lowest Price</option>
                                    <option value="paused">Highest Price</option>
                                    <option value="delayed">New</option>
                                    <option value="canceled">Old</option>
                                </Select>
                                <FaCaretDown
                                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-dark-purple"
                                    aria-hidden="true"
                                    
                                />
                            </div>

                            <h2 className='roboto-medium text-sm mt-5 mb-4'>Arrival Time</h2>
                            <RadioGroup value={selecetArvl} onChange={setSelecetArvl} aria-label="Server size">
                                
                                <Field key={1} className="flex items-center gap-2 ">
                                    <Radio
                                        value={1}
                                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                                    >
                                        
                                    </Radio>
                                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">5:00 AM - 11:59 PM</Label>
                                </Field>
                                <Field key={2} className="flex items-center gap-2 mt-2 ">
                                    <Radio
                                        value={2}
                                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                                    >

                                    </Radio>
                                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm">12:00 AM - 5:59 PM</Label>
                                </Field>
                                
                            </RadioGroup>
                            <h2 className='roboto-medium text-sm mt-5 mb-4'>Stops</h2>
                            <RadioGroup value={selecetStops} onChange={setSelecetStops} aria-label="Server size">
                                
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
                            <RadioGroup value={selecetStops} onChange={setSelecetStops} aria-label="Server size">
                                
                                <Field key={1} className="flex items-center gap-2 mb-2.5">
                                    <Radio
                                        value={1}
                                        className="group flex size-3 items-center justify-center rounded-full border bg-white data-[checked]:bg-dark-purple cursor-pointer"
                                    >
                                        
                                    </Radio>
                                    <Label className="cursor-pointer select-none roboto-regular text-medium-gray text-sm w-full flex items-center justify-between">Alitalia <span className='text-dark-gray'>$230</span></Label>
                                </Field>
                                
                            </RadioGroup>
                        </div>
                    </div>

                    
                </div>
                <div className='w-1/4 h-full pl-6 '>
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
            </div>

        </div>
    )

}

export default index