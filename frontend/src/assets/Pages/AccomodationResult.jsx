import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const AccomodationResult = () => {
    const [stay, setStay] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({}); // Initial form state
    const location = useLocation();
    const navigate = useNavigate(); // Navigate between pages

    // Fetch data on location change (query params change)
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Extract query parameters from the location object
                const queryParams = new URLSearchParams(location.search).toString();

                const response = await fetch(`http://localhost:3000/?${queryParams}`, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setStay(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.search]); // Dependency array includes location.search

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
        navigate(`/AccomodationResult?${queryParams}`);
    };

    // Handle loading and error states
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className='h-[1700px] w-full bg-gradient-to-b from-white to-[#dcdcdc] animate-slowFadeIn'>
                {/* Header Section */}
                <div>
                    <img
                        className="h-[616px] w-full border-black object-cover object-bottom"
                        src="taj-theog-facade-image.jpg"
                        alt="theog hotel"
                    />
                    <p className="dancing-script absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity text-[#ffffff] text-[64px] tracking-[5.12px] font-bold text-center z-10">
                        Accommodation
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-[1478px] h-[159px] p-10 bg-[#d9c6af]/20 rounded-[37px] ml-8 mt-10 border-2 hover:border-green-500 border-black">
                    <form className='flex justify-between text-2xl' onSubmit={handleSubmit}>
                        {/* Accommodation Type Dropdown */}
                        <div>
                            <label className='navtxt text-2xl' htmlFor="accommodation">Accommodation 🏠</label>
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
                            <label className="navtxt text-2xl" htmlFor="district">District 🌐</label>
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
                            <label className='navtxt text-2xl' htmlFor="place">Place 📍</label>
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
                                className='border-2 border-black px-6 py-2 mt-7 rounded-lg bg-opacity-60 hover:border-green-500 demon2 text-3xl bg-green-500'
                                type="submit"
                            >
                                Search 🔍
                            </button>
                        </div>
                    </form>
                </div>

                {/* Accommodations Result Section */}
                <div className="w-[1478px] h-screen bg-[#ecebeb] rounded-[94px] overflow-auto shadow mx-8 mt-10 border-2 border-zinc-300 mb-10">

                    <div className="text-black text-[50px] font-normal Raleway pl-12 pt-12 tracking-[3.12px]">Search Result</div>
                    <div className='mt-10'>
                        <ul className='space-y-4'>
                            {stay.length > 0 ? (
                                stay.map(st => (
                                    <li className='flex items-center justify-center space-x-4' key={st._id}>
                                        {/* <img
                                            className="h-[100px] w-[100px] border-black object-cover"
                                            src={st.image}
                                            alt={st.name}
                                        />
                                        <div>
                                            <p className='text-lg font-semibold'>{st.name}, {st.place}</p>
                                        </div> */}
                                        <div className="w-[1244px] h-[400px] border-zinc-400 bg-[#d9d9d9]/40 rounded-[38px] shadow ml-16 mb-5 flex " >
                                            <img
                                                className="h-[350px] w-[400px] border-black object-cover rounded-2xl m-6 ml-8"
                                                src={st.image}
                                                alt={st.name}
                                            />
                                            <div>
                                                <div className="text-black text-[45px] mt-2 font-medium font-['Raleway'] underline ml-10">{st.name}</div>
                                                <div className="text-black text-4xl font-normal font-['Raleway'] ml-10 mt-5">Location: {st.place}</div>
                                                <div className="text-black text-2xl font-normal font-['Raleway'] mt-2 ml-10 ">
                                                    Contact Person : {st.contactName}<br />
                                                    Contact Number : {st.contactNumber}<br />
                                                    Contact Email : {st.contactMail}<br />
                                                    <br />Room rent : {st.roomRent}
                                                    <br />
                                                    <div className='text-red-700 mt-5'>Take me there 📍</div></div>
                                            </div>

                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className='mt-9 ml-20 text-lg '>No stays found ☹️</p>
                            )}
                        </ul>
                    </div>

                </div>
                <div className="w-[1317px] h-[79px] relative flex  justify-center ml-10 ">
                    <div className=" text-black text-[45px] font-normal font-['Raleway']">Want to list your Hotel or Resort ?</div>
                    <NavLink to="/WannaList"> <div className=" text-[#ce0000] text-[45px] font-normal font-['Raleway'] underline">Click Here</div></NavLink>
                </div>

            </div>
            <footer/>
        </>
    );
}

export default AccomodationResult;
