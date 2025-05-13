import React, { useState } from 'react';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Accomodation = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    // Handle form input changes
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission with accommodation, district, and place
    const handleSubmit = (e) => {
        e.preventDefault();
        const queryParams = new URLSearchParams(form).toString();
        console.log(queryParams)
        navigate(`/AccomodationResult?${queryParams}`);
    };

    // Handle popular destination click, sending only district and place
    const handleDestinationClick = (district, place) => {
        const queryParams = new URLSearchParams({ district, place }).toString();
        console.log(queryParams);
        navigate(`/AccomodationResult?${queryParams}`);
    };

    return (
        <div className='h-[2500px] w-full bg-gradient-to-b from-white to-[#8e8e8e] '>
            {/* Form for filtering accommodations */}
            <div className='relative'>
                <img
                    className="h-[616px] w-full border-black object-cover object-bottom animate-slowFadeIn3"
                    src="taj-theog-facade-image.jpg"
                    alt="Ladakh road"
                />
                <p className="dancing-script absolute top-1/2 left-1/2 animate-slowFadeIn transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity text-[#ffffff] text-[64px] tracking-[5.12px] font-bold text-center z-10">
                    Accommodation
                </p>
            </div>
            <div className="w-[1478px] h-[159px] p-10 bg-[#d9c6af]/20 rounded-[37px] ml-8 mt-10 border-2 animate-slowFadeIn hover:border-green-500 border-zinc-300">
                <form className='flex justify-between text-2xl' onSubmit={handleSubmit}>
                    {/* Accommodation Type Dropdown */}
                    <div>
                        <label className=' Raleway text-2xl tracking-normal' htmlFor="accommodation">Accommodation 🏠</label>
                        <select
                            className='mt-1 block w-full p-2 opacity-0.5 border-2 border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-green-500'
                            name="accommodation"
                            onChange={handleForm}
                        >
                            <option value="" disabled>Select accommodation type</option>
                            <option value="hotel">Hotel</option>
                            <option value="homestay">Homestay</option>
                            <option value="resort">Resort</option>
                            <option value="hostel">Hostel</option>
                        </select>
                    </div>

                    {/* District Dropdown */}
                    <div>
                        <label className=" Raleway text-2xl tracking-normal" htmlFor="district">District 🌐</label>
                        <select
                            className="mt-1 block w-full p-2 border-2 border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            name="district"
                            onChange={handleForm}
                        >
                            <option value="" disabled>Select District</option>
                            <option value="bilaspur">Bilaspur</option>
                            <option value="chamba">Chamba</option>
                            <option value="hamirpur">Hamirpur</option>
                            <option value="kangra">Kangra</option>
                            <option value="kinnaur">Kinnaur</option>
                            <option value="kullu">Kullu</option>
                            <option value="lahaul_and_spiti">Lahaul and Spiti</option>
                            <option value="mandi">Mandi</option>
                            <option value="shimla">Shimla</option>
                            <option value="sirmaur">Sirmaur</option>
                            <option value="solan">Solan</option>
                            <option value="una">Una</option>

                        </select>
                    </div>

                    {/* Place Input */}
                    <div>
                        <label className=' Raleway text-2xl tracking-normal' htmlFor="place">Place 📍</label>
                        <input
                            className='mt-1 block w-full p-2 border-2 border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-green-500'
                            type="text"
                            name="place"
                            onChange={handleForm}
                            placeholder="Enter the place name"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            className='border-2 border-black px-6 py-2 mt-7 rounded-lg bg-opacity-60 hover:border-green-500 demon2 tracking-normal text-3xl bg-green-500'
                            type="submit"
                        >
                            Search🔍
                        </button>
                    </div>
                </form>
            </div>

            {/* Popular Destination Clicks */}
            <div className="relative w-[1478px] h-[1450px] bg-[#ecebeb] rounded-[94px] shadow p-5 mx-8 mt-10 border-2 mb-10 border-zinc-300 " data-scroll data-scroll-speed="0.2" data-scroll-class="fade-in">
                <div className="text-black text-[50px] font-normal Raleway underline underline-offset-8 pl-12 pt-12 tracking-normal">Popular Destination</div>
                <div className='relative mt-6'>
                    <div className='grid gap-12 p-5  text-zinc-100 grid-cols-3'>
                        {/* Popular Destination 1: Shimla */}
                        <div onClick={() => handleDestinationClick('shimla', 'shimla')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover bg-bottom border rounded-3xl opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('/Shimla.jpeg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Shimla</div>
                        </div>

                        {/* Popular Destination 2: Spiti Valley */}
                        <div onClick={() => handleDestinationClick('spiti', 'Spiti Valley')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl bg-center opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('https://i.pinimg.com/736x/d7/7a/33/d77a33e54bc1e172ac30f4701a01941d.jpg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Spiti-valley</div>
                        </div>

                        {/* Popular Destination 3: Kinnaur */}
                        <div onClick={() => handleDestinationClick('kinnaur', 'Kinnaur')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover border rounded-3xl opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('https://i.pinimg.com/736x/52/a5/30/52a5305b4667f076e5bb48042afe4c36.jpg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Kinnaur</div>
                        </div>

                        {/* Add more popular destinations as needed */}
                        <div onClick={() => handleDestinationClick('Kangra', 'Dharamshala')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover bg-bottom border rounded-3xl opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('/Dharamshala.jpeg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Dharamshala</div>
                        </div>


                        <div onClick={() => handleDestinationClick('chamba', 'Dalhousie')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover  border rounded-3xl opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('/khjjr.jpeg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Dalhousie</div>
                        </div>

                        <div onClick={() => handleDestinationClick('Kullu', 'manali')}>
                            <div className='relative flex items-center justify-center h-96 w-96 mx-5 bg-cover bg-bottom border rounded-3xl opacity-100 hover:scale-105 border-4 hover:border-green-500 hover:scale-110 ease-in duration-300 ' style={{ backgroundImage: "url('/hadimba.jpeg')" }}></div>
                            <div className="w-[406.72px] h-[127.67px] text-[#020000] text-4xl font-normal font-['Raleway'] ml-6 mt-5 hover:underline decoration-green-500 ">Manali</div>
                        </div>
                        <div className="w-[1317px] h-auto relative mb-10 flex  justify-center ">
                            <div className=" text-black text-[30px] font-normal font-['Raleway']">Want to list your Hotel or Resort ? 🏨</div>

                            <NavLink to="/WannaList"> <div className=" text-[#ce0000] text-[30px] font-normal font-['Raleway'] underline hover:scale-90 ease-in duration-300 hover:text-rose-700 ">Click Here</div></NavLink>
                        </div>

                    </div>


                </div>


            </div>
            <Footer />

        </div>
    );
};

export default Accomodation;
