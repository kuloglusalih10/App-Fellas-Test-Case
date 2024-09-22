import React from 'react'
import { LuPlaneTakeoff,LuPlaneLanding } from "react-icons/lu";
import { IoAirplane } from "react-icons/io5";
import { useFlights, useIsError, useIsLoading ,useIsSuccess,useFilteredFlights } from '../../../stores/flights/hooks';
import {airlines_logo} from "../../../utils/consts/airlines_logo"
import { airports } from "@nwpr/airport-codes";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Flights = () => {

    const flights = useFilteredFlights();
    const [animate, enableAnimations] = useAutoAnimate({})
    const isError =  useIsError();
    const isSuccess = useIsSuccess();
    const isLoading = useIsLoading();



    return (
            <div ref={animate} className='w-full h-full '>

                {
                    isLoading ? 

                        <h1>Yükleniyor...</h1>
                    :

                        isError ? 

                            <h1>Hata</h1>
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
                                                        <p className='roboto-regular text-sm  text-medium-gray '>
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
                            })
            
                }

               

                
            </div>
    )
}

export default Flights