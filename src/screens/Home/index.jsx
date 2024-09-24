import React, { useEffect } from 'react'
import Navbar from './Sections/Navbar';
import Search from './Sections/Search';
import Flights from './Sections/Flights';
import Filter from './Sections/Filter';
import Sidebar from './Sections/Sidebar';


const index = () => {


    // Sayfa scroll edildiğinde navbarın blurlanması
    
    useEffect(()=> {
        function onScroll() {
            const l = document.getElementById("header");
            let main = document.getElementById('main');
            main.scrollTop > 0 ? l.classList.add("scrolled") : l.classList.remove("scrolled");
        }
  
        let main = document.getElementById('main');
        main.addEventListener("scroll", onScroll);
    },[])

    return (
        <div className='w-full h-full'>
            
            <Navbar/>
            
            <div className='w-full h-full flex items-center justify-between'>

                <div id='main' className='w-3/4 h-full overflow-scroll rounded-lg no-scrollbar'>
                    
                    <div className='h-[85px] '/>
                    <Search />
                    
                    <div className='flex mt-7 h-full '>
                        <div className='w-3/4 h-full '>
                            <Flights/>
                            
                        </div>
                        <div className='w-1/4 h-full pl-6 pt-2'>
                            <Filter/>
                        </div>
                    </div>

                    
                </div>
                <div className='w-1/4 h-full pl-6 '>

                    <div className='h-[85px] '/>

                   <Sidebar/>
                    
                </div>
            </div>

        </div>
    )

}

export default index