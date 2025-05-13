import React from 'react';
import { NavLink } from 'react-router-dom';



const Boxes = () => {
 
  return (
    <div className='relative' data-scroll-container >
      <div className='grid gap-12 p-5 text-zinc-100  grid-cols-3'  data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal">
        <NavLink to="/Culture"><div className=' relative ease-in duration-300 flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl opacity-100 hover:scale-105 ' style={{backgroundImage: "url('https://i.pinimg.com/564x/f2/1a/76/f21a760d509da33474a6bef12c898542.jpg')"}}><h1 className='absolute dancing-script text-6xl'> Culture</h1></div></NavLink>
        <NavLink to="Heritage" ><div className=' relative ease-in duration-300 flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl bg-center opacity-100 hover:scale-105' style={{backgroundImage: "url('https://i.pinimg.com/736x/d7/7a/33/d77a33e54bc1e172ac30f4701a01941d.jpg')"}} ><h1 className='absolute dancing-script text-6xl'> heritage</h1></div></NavLink>
        <NavLink to="/Himalyas"><div className=' relative  ease-in duration-300 flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl opacity-100 hover:scale-105' style={{backgroundImage: "url('https://i.pinimg.com/736x/52/a5/30/52a5305b4667f076e5bb48042afe4c36.jpg')"}}><h1 className='absolute dancing-script text-6xl'> Himalyas</h1></div></NavLink>
        <NavLink to="/Cuisine" ><div className=' relative ease-in duration-300 flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl opacity-100 hover:scale-105' style={{backgroundImage: "url('https://i.pinimg.com/564x/c4/d8/df/c4d8df7b1480f3c6f1b791ec645539aa.jpg')"}} ><h1 className='absolute dancing-script drop-shadow-lg text-6xl'> Cuisine</h1></div></NavLink>
        <NavLink to="/Adventures" ><div className=' relative flex items-center ease-in duration-300 justify-center h-96 w-96 mx-5 bg-cover border bg-center rounded-3xl opacity-100 hover:scale-105' style={{backgroundImage: "url('https://i.pinimg.com/564x/88/bf/fc/88bffc0efcc963875ed475218c0d12d9.jpg')"}} ><h1 className='absolute dancing-script text-6xl'>Adventure </h1></div></NavLink>
        <NavLink to="/Florandfauna" ><div className=' relative flex items-center ease-in duration-300 justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl opacity-100 hover:scale-105 bg-bottom' style={{backgroundImage: "url('https://i.pinimg.com/564x/b1/f4/f7/b1f4f7b684ea5410e20777b20fd48d86.jpg')"}} ><h1 className='absolute dancing-script text-6xl'> Flora and fauna</h1></div></NavLink>
      </div>
    </div>
  );
};

export default Boxes