import React, { useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { fetchBooks } from '../../../stores/books/actions';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useBooks, useBookIsError, useBookIsLoading, useBookIsSuccess } from '../../../stores/books/hooks';
import Lottie from 'react-lottie';
import spinner from '../../../assets/spinner2.json';
import error from "../../../assets/404.json"

const Books = () => {

    
    useEffect(()=> {
        fetchBooks();
    },[]);

    const isBookError = useBookIsError();
    const isBookLoading = useBookIsLoading();

    const books = useBooks();
    const [bookanimate, enableAnimations] = useAutoAnimate({})


    return (

        <div ref={bookanimate}>
            {

                isBookLoading ?  // Çekme işlemi devam ediyorsa

                    <div className='w-full h-full flex items-start justify-center mt-8'>
                        <Lottie options={{animationData: spinner, loop: true, autoplay: true}}
                            height={120}
                            width={120}
                        />
                    </div>

                

                    :


                    isBookError ?  // Hata alındıysa

                            <div className='w-full h-full flex items-start justify-center mt-8'>
                                <Lottie options={{animationData: error, loop: true, autoplay: true}}
                                    height={160}
                                    width={160}
                                />
                            </div>

                            :


                            books.map((book, i)=> {
                                return (

                                    <div key={i} className='border rounded-md bg-white py-6 px-6 mt-6 flex items-center'>
                                    
                                        <div className='flex w-full '>

                                            <div className='flex w-[60%]'>

                                                {/* logo */}
                                                <div className='w-[9%]'>
                                                    <img src={book.logo} alt="Airlines logo" className='object-cover' />
                                                </div>

                                                {/* uçuş bilgileri */}

                                                <div className='px-8 pt-3.5 w-full'>
                                                    <h2 className='roboto-light text-2xl text-dark-gray/60'>
                                                        {book.departureTime} - {book.arrivalTime}
                                                    </h2>
                                                    <div className='flex items-center mt-7 w-full justify-between'>
                                                        <div className='w-1/3'>
                                                            <h3 className='text-sm roboto-medium line-clamp-1 pr-5 text-dark-gray/80'>
                                                                {book.airlineName}
                                                            </h3>
                                                            <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-dark-purple cursor-pointer mt-1'>
                                                                Flight Details <FaAngleDown />
                                                            </div>
                                                        </div>
                                                        <div className=' w-1/3'>
                                                            <h3 className='text-sm roboto-medium pr-5 text-dark-gray/80'>
                                                                ({book.stops == 1 ? ' Nonstop ' : ` ${book.stops} stops `})
                                                            </h3>
                                                            <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-ligth-gray cursor-pointer mt-1'>
                                                                {book.duration}
                                                            </div>
                                                        </div>
                                                        <div className=' w-1/3'>
                                                            <h3 className='text-sm roboto-medium pr-5 text-dark-gray/80'>
                                                                {book.fromLocation} to {book.toLocation}
                                                            </h3>
                                                            <div className='text-center flex items-center gap-x-2 roboto-regular text-xs text-ligth-gray cursor-pointer mt-1'>
                                                                {book.airlineIATA} {book.airlineCode}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Fiyatlandırmalar */}

                                            <div className='flex items-center w-[40%] justify-center gap-x-3'>
                                                    <div className='border rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5'>
                                                        <h2 className='text-dark-gray/80 roboto-bold text-center text-xl' >
                                                            ${book.price}
                                                        </h2>
                                                        <span className='text-ligth-gray text-sm'>
                                                            Price
                                                        </span>
                                                    </div>
                                                    <div className=' rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5 bg-ligth-gray/5'>
                                                        <div className='w-full flex items-center h-full justify-center gap-x-3'>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                        </div>
                                                    </div>
                                                    <div className=' rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5 bg-ligth-gray/5'>
                                                        <div className='w-full flex items-center h-full justify-center gap-x-3'>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                        </div>
                                                    </div>
                                                    <div className=' rounded-md w-1/5 h-full flex flex-col items-center justify-center gap-y-5 bg-ligth-gray/5'>
                                                        <div className='w-full flex items-center h-full justify-center gap-x-3'>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                            <span className='w-2 h-[1px] bg-ligth-gray/50'/>
                                                        </div>
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

                                )
                            })
            }
        </div>
    )
}

export default Books