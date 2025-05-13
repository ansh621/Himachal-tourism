import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const Destination = () => {


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
    <div className=''>
      <div
        className=" relative h-screen w-screen"
        style={{
          backgroundImage: "url('/chitkull.jpg')",
          height: 'screen', // Example height, adjust as needed
          backgroundSize: 'cover', // Ensures the image covers the div
          backgroundPosition: 'center', // Centers the image
        }}
      >

        <div className="absolute w-[553px] h-[83px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#527396] to-[#80BA66] text-[70px] top-40 left-16 font-medium dancing-script tracking-[2.80px] ">
          Himachal Pradesh
        </div>

      </div>
      <div className="absolute flex bottom-12 w-screen h-[427px] px-10 ">
        <div className="h-full w-1/3 bg-opacity-40 bg-[#7a7979] rounded-[30px]">
          <div className="w-[437px] h-[463px] text-justify text-white text-[32px] font-normal leading-tight dancing-script ml-3 tracking-tight">Uncover a place where nature, culture, and adventure come together. Whether you're looking for scenic views, local traditions, or thrilling experiences, our destinations offer something for every traveler. Embrace the journey and create unforgettable memories. Let the landscapes inspire you,
            and the culture enrich your soul. Each moment spent here promises a new story waiting to be told. </div></div>



        <div
          {...handlers}
          ref={scrollContainerRef} className="no-select h-full w-2/3  rounded-[30px] ml-4  flex scroll-smooth overflow-x-scroll  space-x-5 overflow-y-hidden ">
          <NavLink to="/Populardest"> <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/Shimla.jpeg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Popular Destination</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>
          </div>   </NavLink>
         <NavLink to="/CultureandHeritage"> <div className=" relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/kangradance.jpg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Culture & Heritage</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

          </div></NavLink>
          <NavLink to="/Spiritual">
          <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/sarahan.jpg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Spiritual</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

          </div></NavLink>
          <NavLink to="/Florandfauna">
          <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/Chitkul.jpeg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Nature</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

          </div></NavLink>
          <NavLink to="/Adventures">
          <div className="relative min-w-[300px] h-full rounded-[30px]  flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/paragliing.jpg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Adventure</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

          </div></NavLink>
          <NavLink to="/Unexplored">
          <div className="relative min-w-[300px] h-full rounded-[30px] flex items-center justify-center hover:scale-105 ease-in duration-300" style={{
            backgroundImage: "url('/bike2.jpg')",
            height: 'screen', // Example height, adjust as needed
            backgroundSize: 'cover', // Ensures the image covers the div
            backgroundPosition: 'center', // Centers the image
          }}>
            <div className="absolute w-[297.36px] h-[43.92px] bottom-20 left-5 mix-blend-hard-light text-white text-[32px] font-semibold dancing-script tracking-wider">Unexplored</div>
            <div className='absolute bottom-6 left-5 w-[178.65px] h-[45.08px] border-2 rounded-[30px] p-2 font-["Raleway"] flex justify-center text-white hover:border-green-700'>Find More</div>

          </div>
          </NavLink>

        </div>
      </div>
      <Footer />


    </div>
  );
};

export default Destination;
