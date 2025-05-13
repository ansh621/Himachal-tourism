import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const Spiritual = () => {


    const scrollContainerRef = useRef(null);


    // Swipe handlers to scroll horizontally
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft += 300; // Adjust scroll distance
            }
        },
        onSwipedRight: () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft -= 300; // Adjust scroll distance
            }
        },
        preventScrollOnSwipe: true,
        trackMouse: true, // Enable mouse dragging as swipe
    });




    return (
        <div>
            <div
                className=" relative h-screen w-screen"
                style={{
                    backgroundImage: "url('/cult.jpg')",
                    height: 'screen', // Example height, adjust as needed
                    backgroundSize: 'cover', // Ensures the image covers the div
                    backgroundPosition: 'center', // Centers the image
                }}
            >

                <div className="absolute w-[553px] h-[83px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#E0EAFC] to-[#fff] text-[70px] top-40 left-16 font-medium dancing-script tracking-[2.80px] ">
                    Spiritual
                </div>

            </div>
            <div className="absolute flex bottom-12 w-screen h-[427px] px-10 ">
                <div className="h-full w-1/3 bg-opacity-40 bg-[#7a7979] rounded-[30px]">

                    <div className="w-[437px] h-[463px] text-justify text-white text-[32px] font-normal leading-tight dancing-script ml-3 tracking-tight">
                        Discover the spiritual heart of Himachal Pradesh, where the serene landscapes are intertwined with ancient traditions and sacred practices. This land is home to timeless monasteries, revered temples, and peaceful retreats that offer solace and tranquility.
                        From the chanting monks in the monasteries of Spiti and Lahaul to the sacred chants in the Hindu temples of Kullu and Chamba,

                    </div>
                </div>



                <div
                    {...handlers}
                    ref={scrollContainerRef} className="no-select h-full w-2/3  rounded-[30px] ml-4  flex scroll-smooth overflow-x-scroll  space-x-5 overflow-y-hidden ">
                    <NavLink to="/ChristianityInHimachal"> <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
                        backgroundImage: "url('/Shimla.jpeg')",
                        height: 'screen', // Example height, adjust as needed
                        backgroundSize: 'cover', // Ensures the image covers the div
                        backgroundPosition: 'center', // Centers the image
                    }}>
                        <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Churches</div>
                        <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>
                    </div>   </NavLink>

                    <NavLink to="/HinduismInHimachal"><div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
                        backgroundImage: "url('/sarahan.jpg')",
                        height: 'screen', // Example height, adjust as needed
                        backgroundSize: 'cover', // Ensures the image covers the div
                        backgroundPosition: 'center', // Centers the image
                    }}>
                        <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Temples</div>
                        <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

                    </div></NavLink>
                    <NavLink to="/BuddhismInHimachal">
                        <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
                            backgroundImage: "url('/Incredible India 🇮🇳!_Gue Village, Spiti, Himachal Pradesh_.jpeg')",
                            height: 'screen', // Example height, adjust as needed
                            backgroundSize: 'cover', // Ensures the image covers the div
                            backgroundPosition: 'center', // Centers the image
                        }}>
                            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Monasteries</div>
                            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

                        </div></NavLink>
                    <NavLink to="/SikhismInHimachal">
                        <div className="relative min-w-[300px] h-full rounded-[30px] flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
                            backgroundImage: "url('/Gurudwaras.jpg')",
                            height: 'screen', // Example height, adjust as needed
                            backgroundSize: 'cover', // Ensures the image covers the div
                            backgroundPosition: 'center', // Centers the image
                        }}>
                            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Gurudwara</div>
                            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

                        </div>
                    </NavLink>

                </div>
            </div>
            <Footer />


        </div>
    );
};

export default Spiritual;
