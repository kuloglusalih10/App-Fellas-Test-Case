import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import {  Select } from '@headlessui/react';
import clsx from 'clsx'
import { MdInfoOutline } from "react-icons/md";
import Navbar from './sections/Navbar';
import Books from "./sections/Books"
import { sortBooks } from '../../utils/sortBooks';
import { useBooks } from '../../stores/books/hooks';
import { setBooks } from '../../stores/books/actions';

const index = () => {

    const books = useBooks();
    const [sortBy, setSortBy] = useState('recommended')

    const handleSort = (e) => {
        
        setSortBy(e.target.value)
        const sortedBooks = sortBooks(books,e.target.value);
        setBooks(sortedBooks);
    }

    return (

        <div className='w-full h-full bg-main '>

            <Navbar/>

            <div className='w-full px-32 flex-1 h-full overflow-scroll rounded-lg no-scrollbar pb-56'>

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

                                value={sortBy}
                                onChange={ handleSort}
                            >
                                <option value="recommended" className='roboto-bold'>Recommended</option>
                                <option value="highPrice">Highest Price</option>
                                <option value="lowPrice">Low Price</option>
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

                <Books/>
                
            </div>

        </div>
    )
}

export default index