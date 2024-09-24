import React,{useEffect, useState} from 'react'
import { LuPlaneTakeoff,LuPlaneLanding } from "react-icons/lu";
import { IoAirplane } from "react-icons/io5";
import {  useIsError, useIsLoading,useFilteredFlights } from '../../../stores/flights/hooks';
import {airlines_logo} from "../../../utils/consts/airlines_logo"
import { airports } from "@nwpr/airport-codes";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { fetchFlights } from '../../../stores/flights/actions';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/flight3.json';
import spinner from '../../../assets/spinner2.json';
import error from "../../../assets/404.json"
import {airlines_name} from "../../../utils/consts/airlines_name"
import { addBook } from '../../../stores/books/actions';
import { useBookIsLoading} from "../../../stores/books/hooks"
import { useNavigate } from 'react-router';
import {isAfter, parseISO} from "date-fns"
import { toast } from 'react-toastify';

const Flights = () => {

    const flights = useFilteredFlights();
    const [animate, enableAnimations] = useAutoAnimate({})
    const isError =  useIsError();
    const isLoading = useIsLoading();
    const [selectedFlight, setSelectedFlight] = useState({});
    const navigation = useNavigate();

    const isBookLoading = useBookIsLoading();
    const [selectedScheduleDate, setSelectedScheduleDate] = useState('');


    useEffect(()=>{
        fetchFlights();
    },[])

    let [isOpen, setIsOpen] = useState(false);


    const handleAddBook = () => {
        
        if(isAfter(new Date(), parseISO(selectedScheduleDate))){
            toast('Geçmiş uçuşa rezervasyon yapılamaz', {type: 'error', style:{fontSize: 12}});
        }
        else{
            addBook(selectedFlight);
            navigation('/books')
        }
        setIsOpen(false);
    }

    const handleDialogClose = () => {
        isBookLoading ? '' : setIsOpen(false)
    }

    const handleBook = (book, scheduleDate) => {

        setSelectedScheduleDate(scheduleDate);
        setSelectedFlight(book);
        setIsOpen(true);
    }


    return (
            <div ref={animate} className='w-full h-full relative'>

                <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none  " onClose={()=> handleDialogClose()}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto  bg-white/5 p-6 backdrop-blur-sm ">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <DialogPanel
                            transition
                            className="w-full h-full max-w-md rounded-xl bg-white border px-6 py-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                            >
                                <DialogTitle as="h3" className="text-base/7 font-medium text-dark-gray roboto-medium flex items-center justify-between w-full">
                                    Booking confirmation 
                                    <Lottie options={{animationData, loop: true, autoplay: true}}
                                    height={50}
                                    width={100}
                                    
                                    />
                                </DialogTitle>
                                
                                    <p className="mt-2 text-sm/6 text-dark-gray/80">
                                        Please confirm your flight reservation details. Once submitted, changes may not be allowed.
                                    </p>

                                    <div className="mt-4 flex gap-x-4 w-full justify-end">
                                        <button onClick={()=> handleDialogClose()} className='border border-dark-purple rounded-md roboto-regular text-dark-purple bg-ligth-purple px-6 text-sm'>
                                            Cancel
                                        </button>
                                        <button
                                        className="inline-flex items-center gap-2 rounded-md bg-dark-purple py-1.5 px-6 text-sm roboto-regular text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                        onClick={()=>handleAddBook()}
                                        >
                                            {
                                                isBookLoading ? 
                                                
                                                'Booking'

                                                    : 
                                                
                                                'Confirm'
                                            }
                                        </button>
                                    </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>

                {
                    isLoading ? 

                        <div className='w-full h-full flex items-start justify-center mt-8'>
                            <Lottie options={{animationData: spinner, loop: true, autoplay: true}}
                                height={120}
                                width={120}
                            />

                        </div>
                    :

                        isError ? 

                            <div className='w-full h-full flex items-start justify-center mt-8'>
                                <Lottie options={{animationData: error, loop: true, autoplay: true}}
                                    height={160}
                                    width={160}
                                />

                            </div>
                        :

                            flights && flights.map((flight)=> {

                                

                                return (

                                    <div className='mb-4' key={flight.id}>
                                        <div className='w-full  bg-white border rounded-t-lg rounded-br-lg'>
                                            <div className='w-full pt-6 pb-4 px-4'>
                                                <h2 className='roboto-medium text-sm'>
                                                    {
                                                        flight.flightDirection == 'A' ? `Amsterdam -  ${airports.find((airport) => airport.iata === flight.route.destinations[flight.route.destinations.length -1])?.city }` 

                                                            : 
                                                        
                                                        `${airports.find((airport) => airport.iata === flight.route.destinations[flight.route.destinations.length -1])?.city } - Amsterdam ` 
                                                    }
                                                </h2>
                                                <div className='flex items-center mt-4 w-full'>
                                                    <div className='flex flex-col w-1/5 justify-center'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <LuPlaneTakeoff color='#696666'/> <span className='text-xs roboto-regular text-ligth-gray'>Departure</span>
                                                        </div>
                                                        <h2 className='roboto-bold text-sm mt-2'>
                                                            {flight.departureTime}
                                                        </h2>
                                                        <p className='roboto-regular  text-sm  text-medium-gray mt-1'>
                                                            Airport : {
                                                                    flight.flightDirection == 'A' ? `AMS` 

                                                                : 
                                                            
                                                                    `${flight.route.destinations[flight.route.destinations.length -1]}` 
                                                            }
                                                        </p>         
                                                    </div>
                                                    <div className='w-1/5 px-6 items-center '>
                                                        <div className='h-[2px] bg-ligth-gray ' />
                                                    </div>
                                                    <div className='flex flex-col w-1/5 items-center justify-center'>
                                                        <div className='mb-2 w-5'>
                                                            <img className='object-cover ' src={airlines_logo.get(flight.prefixIATA)} alt="airlines logo" />
                                                        </div>
                                                        <IoAirplane color='#4B0097'  size={21} className='mb-1.5'/>
                                                        <p className='roboto-regular text-sm text-[13px] text-medium-gray '>
                                                            {flight.duration} ({flight.route.destinations.length == 1 ? ' Nonstop ' : ` ${flight.route.destinations.length-1} stops `})
                                                        </p>         
                                                    </div>
                                                    <div className='w-1/5 px-6 items-center '>
                                                        <div className='h-[2px] bg-ligth-gray ' />
                                                    </div>
                                                    <div className='flex flex-col w-1/5 justify-center items-center'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <LuPlaneLanding color='#696666'/> <span className='text-xs roboto-regular text-ligth-gray'>Arrival</span>
                                                        </div>
                                                        <h2 className='roboto-bold text-sm mt-2'>
                                                           {flight.arrivalTime}
                                                        </h2>
                                                        <p className='roboto-regular  text-sm  text-medium-gray mt-1'>
                                                            Airport : {
                                                                    flight.flightDirection == 'D' ? `AMS` 

                                                                : 
                                                            
                                                                    `${flight.route.destinations[flight.route.destinations.length -1]}` 
                                                            }
                                                        </p>         
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div className=' w-full flex items-center justify-between pl-4 h-16'>
                                                <div className='flex flex-col w-1/5  h-full'>
                                                    <h2 className='text-dark-purple text-md roboto-bold'>Price: ${flight.price}</h2>
                                                    <span className='text-xs roboto-medium text-medium-gray mt-0.5'>{ flight.flightDirection == 'D' ? 'Departure' :   'Arrival'}</span>
                                                </div>
                                            <button onClick={()=>handleBook({
                                                    'id' : flight.id, 
                                                    'logo' : airlines_logo.get(flight.prefixIATA), 
                                                    'departureTime': flight.departureTime, 
                                                    'arrivalTime': flight.arrivalTime, 
                                                    'airlineName' : airlines_name.get(flight.prefixIATA), 
                                                    'stops' : flight.route.destinations.length, 
                                                    'price' : flight.price,
                                                    'duration' : flight.duration,
                                                    'fromLocation' : flight.flightDirection == 'A' ? `AMS` : `${flight.route.destinations[flight.route.destinations.length -1]}`, 
                                                    'toLocation': flight.flightDirection == 'D' ? `AMS` : `${flight.route.destinations[flight.route.destinations.length -1]}`, 
                                                    'airlineIATA': flight.prefixIATA, 
                                                    'airlineCode': flight.airlineCode,
                                            
                                                    },flight.scheduleDateTime )} 
                                                    className='roboto-bold text-sm flex items-center justify-center px-12 bg-dark-purple text-white h-full rounded-tl-lg rounded-br-lg'>
                                                    Book Flight
                                            </button>
                                            </div>
                                        </div>

                                        <button className='px-1 py-3 underline text-dark-purple bg-ligth-purple w-1/5 rounded-b-lg text-center text-sm roboto-regular'>
                                            Check the details
                                        </button>

                                    </div>
                                )
                            })
            
                }

               
            <div className='h-[70px]'/>
                
            </div>
    )
}

export default Flights